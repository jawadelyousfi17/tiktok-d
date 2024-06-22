"use client";

import React, { useRef, useState , useEffect } from "react";
import { FiLink } from "react-icons/fi";
import { LiaPasteSolid } from "react-icons/lia";
import Alert from "./alert";
import { IoMdClose } from "react-icons/io";
import Lottie from 'react-lottie';

import animationData from '@/animations/loading.json';

const Hero = ({ data , fonction }) => {

  const [linkInput, setLinkInput] = useState("");
  const section1Ref = useRef(null);


    async function handlePaste() {
      if(linkInput) {setLinkInput('') ; return }
        try {
            const text = await navigator.clipboard.readText();
            setLinkInput(text);
            fonction.handleDownload(text)
        } catch (error) {
        }
    }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    useEffect(() => {
      if(fonction.isVideoReady) {
        section1Ref.current.scrollIntoView({ behavior: 'smooth' });

      }
    } , [fonction.isVideoReady])

    let logo = 'music.png'
    if(data.type === 'video') {
     logo = 'play.png'
    }

  return (
    <section ref={section1Ref} className="flex flex-col gap-4 bg-slate-100 p-4 rounded-lg hrh py-8 gradient-border">

     {fonction.loading &&  <div className="anim"><Lottie options={defaultOptions} height={80} width={80} /></div>}
      
      <div className="flex flex-row gap-6 justify-center items-center ">
        <div>
          <img src={`/icons/${logo}`} className="w-12"></img>
        </div>
        <div>
          <h1 className="text-2xl font-bold gradient">{data.title}</h1>
          <h2 className="text-md font-semibold ">{data.heading_2}</h2>
        </div>
      </div>
      {fonction.isError && <Alert message={fonction.errormessage}></Alert>}

      <div className="flex flex-col gap-2 md:flex-row">

       

          
        <div className=" flex items-center gap-2 px-0 pl-4 w-full rounded-sm my-input h-12 md:h-auto">
          <FiLink className="shrink-0" />
          <input
            type="text"
            className="grow overflow-hidden"
            placeholder="Tiktok link"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />
          <button onClick={handlePaste} className="paste">
           {!linkInput && <LiaPasteSolid size={20}  />}
           {linkInput && <IoMdClose  size={20}  />}

          </button>
        </div>
        
        <button disabled={fonction.loading} onClick={() => fonction.handleDownload(linkInput)} className="btn btn-accent w-full md:w-auto bg-gradient rounded-sm h-8">
       {/* { fonction.loading &&  <Lottie options={defaultOptions} height={20} width={20} />} */}
          Download
        </button>
      </div>



    </section>
  );
};

export default Hero;
