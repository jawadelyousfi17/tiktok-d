import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { BsFillBadgeHdFill } from "react-icons/bs";
import { motion } from "framer-motion";
import axios from "axios";

const VideoCard = ({ state }) => {
  const [loading, setLoading] = useState(false);
  const [loadingHd, setLoadingHd] = useState(false);

  async function download(uri) {
    setLoading(true);
    try {
      const response = await axios.get(uri, {
        responseType: "blob",
      });
      const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
      const tempAnchor = document.createElement("a");
      tempAnchor.href = blobUrl;
      tempAnchor.setAttribute("download", "filename.mp4"); // Replace 'filename.ext' with your desired filename
      tempAnchor.click();
      window.URL.revokeObjectURL(blobUrl);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("an eror accured plz try again");
      console.error("Error downloading file:", error);
    }
  }

  async function downloadHd(uri) {
    setLoadingHd(true);
    try {
      const response = await axios.get(uri, {
        responseType: "blob",
      });
      const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
      const tempAnchor = document.createElement("a");
      tempAnchor.href = blobUrl;
      tempAnchor.setAttribute("download", state.videoData.title+"filename.mp4"); // Replace 'filename.ext' with your desired filename
      tempAnchor.click();
      window.URL.revokeObjectURL(blobUrl);
      setLoadingHd(false);
    } catch (error) {
      setLoadingHd(false);
      alert("an eror accured plz try again" , uri);
      console.error("Error downloading file:", error);
    }
  } 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 1.05 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className=" space-y-4 bg-slate-50 p-4 rounded-md  gradient-border"
    >
      <div className="flex flex-row gap-4 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={state.videoData.avatar} />
          </div>
        </div>
        <span className="text-md font-semibold">
          {state.videoData.authorName}
        </span>
      </div>

      <div>
        <p className="text-md font-medium "> {state.videoData.title} </p>
      </div>

      <div className="flex flex-row gap-4 ">
        <img src={state.videoData.cover} className="w-1/3 rounded-md"></img>
        <div className="flex flex-col gap-4 w-full pr ">
          <button
            disabled={loading}
            onClick={() => download(state.videoData.play)}
            className="btn btn-neutral rounded-md bg-slate-50 text-black mybtn  flex justify-start"
          >
            {" "}
            {!loading && <MdOutlineFileDownload size={18} />}
            {!loading && "Download"}
            {loading && "Downloading"}
            {loading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
          </button>
          <button className="btn btn-neutral rounded-md bg-slate-50 text-black mybtn  flex justify-start">
            {" "}
            <FaMusic size={18} />
            {!loading && "Download Mp3"}
            {loading && "Downloading"}
            {loading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
          </button>
          <button disabled={loadingHd} onClick={() => downloadHd(state.videoData.hd_play)} className="btn btn-neutral rounded-md bg-slate-50 text-black mybtn  flex justify-start">
            {" "}
            {!loadingHd && <BsFillBadgeHdFill size={18} />}
            {!loadingHd && "Download HD"}
            {loadingHd && "Downloading"}
            {loadingHd && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
