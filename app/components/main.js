"use client";




import React, { useState } from "react";
import Hero from "./hero";
import VideoCard from "./videocard";
import { isValidTiktokUrl } from "@/libs/helpers";
import axios from "axios";
import TiktokMp3 from "./landing/tiktok-mp3";
import TiktokMp4 from "./landing/tiktok-mp4";

const MainPage = ({ data }) => {
  const [linkInput, setLinkInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVideoReady , setIsVideoReady] = useState(false)
  const [videoData, setVideoData] = useState({
    authorName: null,
    avatar: null,
    title: null,
    cover: null,
    hd_play: null,
    play: null,
    music : null
  });
  const handleDownload = async (url) => {
    setIsError(false);
    setLoading(true);
    setIsVideoReady(false)

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
       'x-rapidapi-key': '2bd5372d1amshfdfc5d0d770623dp1c8bb4jsn1048a81cbff5',
		'x-rapidapi-host': 'tiktok-scraper7.p.rapidapi.com'
      },
    };

    try {
      const res = await axios.request(options);
      const response = res.data;
      console.log(response)
      if (response.msg !== "success") {
        setErrorMessage(
          "Can't download this video . please check your link or try again"
        );
        setIsError(true);
        setLoading(false);

      }
      const data = response.data
      setVideoData({
        authorName: data.author.nickname,
        avatar: data.author.avatar,
        title: data.title.substring(0,data.title.length > 100 ? 100 : data.title.length),
        cover: data.origin_cover,
        hd_play: data.hdplay || null,
        play: data.play,
        music : data.music_info.play
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
     { data.type==='mp3' && <TiktokMp3></TiktokMp3>}
     { data.type==='video' && <TiktokMp4></TiktokMp4>}

    </div>
  );
};
export default MainPage;
