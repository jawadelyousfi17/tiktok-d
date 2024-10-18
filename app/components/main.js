"use client";




import React, { useState } from "react";
import Hero from "./hero";
import VideoCard from "./videocard";
import { isValidTiktokUrl } from "@/libs/helpers";
import axios from "axios";
import TiktokMp3 from "./landing/tiktok-mp3";
import TiktokMp4 from "./landing/tiktok-mp4";
import ImageCard from "./imagecard";

const MainPage = ({ data }) => {
  const [linkInput, setLinkInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVideoReady , setIsVideoReady] = useState(false)
  const [isImageReady , setImagesReady] = useState(false)
  const [videoData, setVideoData] = useState({
    authorName: null,
    avatar: null,
    title: null,
    cover: null,
    hd_play: null,
    play: null,
    music : null,
    images : [] ,
  });
  const handleDownload = async (url) => {
    setIsError(false);
    setLoading(true);
    setIsVideoReady(false)
    setImagesReady(false)
    if (!isValidTiktokUrl(url)) {
      setErrorMessage("invalid tiktok url");
      setIsError(true);
      setLoading(false);
      return;
    }

    // fetch the api
    const options = {
      method: "GET",
      url: "https://tiktok-scraper7.p.rapidapi.com/",
      params: {
        url: url,
        hd: "1",
      },
      headers: {
       'x-rapidapi-key': 'd',
		'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com'
      },
    };

    try {
      const res = await axios.request(options);
      const response = res.data;
      console.log(response)
      if (response.msg !== "success") {
        setErrorMessage(
          "Can't download this video .try again"
        );
        setIsError(true);
        setLoading(false);

      }
      const data = response.data

      // if the data s images
      if(data.images) {
        setVideoData({
          authorName: data.author.nickname,
        avatar: data.author.avatar,
        title: data.title?.substring(0,data.title.length > 100 ? 100 : data.title.length) || "",
        cover: data.origin_cover,
        hd_play: null,
        play: null,
        music : data.music_info.play ,
        images : [...data.images] ,
        })
        setLoading(false)
        setImagesReady(true)
        console.log("ima fine")
        return
      }

      // if it is a video
      setVideoData({
        authorName: data.author.nickname,
        avatar: data.author.avatar,
        title:  data.title?.substring(0,data.title.length > 100 ? 100 : data.title.length) || "",
        cover: data.origin_cover,
        hd_play: data.hdplay || null,
        play: data.play,
        music : data.music_info.play  , 
        images : [] ,
      });
      setIsVideoReady(true)
      setLoading(false)
    } catch (error) {
      setErrorMessage(
        "Can't download this video . please try again"
      );
      setIsError(true);
      setLoading(false);
      setIsVideoReady(false)
      console.log(error)
    }
  };

  return (
    <div className=" space-y-4 py-4">
    
      <Hero
        data={data}
        fonction={{
          linkInput,
          setLinkInput,
          handleDownload,
          isError,
          errormessage,
          loading,
          isVideoReady
        }}
      ></Hero>
      {isVideoReady && <VideoCard state={{videoData}} />}
       {isImageReady && <ImageCard state={{videoData}} /> }
     { data.type==='mp3' && <TiktokMp3></TiktokMp3>}
     { data.type==='video' && <TiktokMp4></TiktokMp4>}

    </div>
  );
};
export default MainPage;
