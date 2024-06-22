import React, { useState , useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { BsFillBadgeHdFill } from "react-icons/bs";
import { motion } from "framer-motion";
import axios from "axios";
import Lottie from 'react-lottie';

import animationData from '@/animations/check.json';

const ImageCard = ({ state }) => {
  const [loading, setLoading] = useState(false);
  const [loadingHd, setLoadingHd] = useState(false);
  const [loadingM, setLoadingM] = useState(false);
  const [progress, setProgress] = useState(0)

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  

  async function downloadMp3(uri) {
    setProgress(0)
    setLoadingM(true);
    document.getElementById('my_modal_5').showModal()

    try {
      const response = await axios.get(uri, {
        responseType: "blob",
        onDownloadProgress: (progressEvent) => {
          const totalLength = progressEvent.lengthComputable
            ? progressEvent.total
            : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');

          if (totalLength !== null) {
            setProgress(Math.round((progressEvent.loaded * 100) / totalLength));
          }
        },
      });
      const blobUrl = window.URL.createObjectURL(new Blob([response.data]));
      const tempAnchor = document.createElement("a");
      tempAnchor.href = blobUrl;
      tempAnchor.setAttribute("download", state.videoData.title +getRandomNumber(10,50).toString()+ "-Tiktoomp3.mp3"); // Replace 'filename.ext' with your desired filename
      tempAnchor.click();
      window.URL.revokeObjectURL(blobUrl);
      setLoadingM(false);
    } catch (error) {
      setLoadingM(false);
      alert("an eror accured plz try again");
      console.error("Error downloading file:", error);
    }
  }

  

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 1.05 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className=" space-y-4 bg-slate-50 p-4 rounded-md  "
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
      <div className="flex flex-col gap-4 w-full pr ">
            
            {/* Download Mp3 */}
             <button onClick={() => downloadMp3(state.videoData.music)} className="btn btn-neutral rounded-md bg-slate-50 text-black mybtn  flex justify-start">
               {" "}
               <FaMusic size={18} />
               {!loadingM && "Download Mp3"}
               {loadingM && "Downloading"}
               {loadingM && (
                 <span className="loading loading-spinner loading-sm"></span>
               )}
             </button>
            
   
           </div>
      <div className="flex flex-row gap-4 ">
               <div className="grid grid-cols-2 gap-6 gap-x-2 md:grid-cols-3 lg:grid-cols-4 ">
                {state.videoData.images.map((image , index) => (
                   <div className="flex flex-col gap-2" key={index}>
                        <img src={image} className=" rounded-lg"></img>
                        <a target="_blank" href={image} className="btn btn-accent">download</a>
                    </div> 
                ))}
                    
               </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">

          {(loading || loadingHd || loadingM) && <div>
            <h3 className="font-bold text-lg">Downloading ...</h3>
            <h3 className="font-medium text-md">You can leave the page now the download will start automaticly</h3>
            <progress className="progress progress-accent w-full" value={progress} max="100"></progress>

            {/* <div className="py-4 flex justify-center">
              <div className="radial-progress text-accent font-medium" style={{ "--value": progress, "--size": "8rem", "--thickness": "4px" }} role="progressbar"> {progress} %</div>
            </div> */}
          </div>}

          {!(loading || loadingHd || loadingM) && <div className="flex flex-col justify-center items-center ">  
            <Lottie options={defaultOptions} height={100} width={100} />     
                   <p className="font-bold text-lg" >Downloaded</p>

          
          </div>}

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {!(loading || loadingHd || loadingM) && <button className="btn  btn-accent">Close</button>}
            </form>
          </div>
        </div>
      </dialog>


    </motion.div>
  );
};

export default ImageCard;
