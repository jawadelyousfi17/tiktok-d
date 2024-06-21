"use client";

import React, { useEffect, useState } from "react";
import { FiLink } from "react-icons/fi";
import { LiaPasteSolid } from "react-icons/lia";
import Alert from "./alert";
import { IoMdClose } from "react-icons/io";

const Hero = ({ data , fonction }) => {

  const [linkInput, setLinkInput] = useState("");


    async function handlePaste() {
      if(linkInput) {setLinkInput('') ; return }
        try {
            const text = await navigator.clipboard.readText();
            setLinkInput(text);
            fonction.handleDownload(text)
        } catch (error) {
        }
    }

  

  return (
    <section className="flex flex-col gap-4 bg-slate-100 p-4 rounded-lg hrh py-8 gradient-border">
      <div className="flex flex-row gap-6 justify-center items-center ">
        <div>
          <img src="/icons/music.png" className="w-12"></img>
        </div>
        <div>
          <h1 className="text-2xl font-bold gradient">{data.title}</h1>
          <h2 className="text-md font-semibold ">{data.heading_2}</h2>
        </div>
      </div>
      {fonction.isError && <Alert message={fonction.errormessage}></Alert>}

      <div className="flex flex-col gap-2 md:flex-row">

       

          
        <div className="input input-bordered flex items-center gap-2 px-0 pl-4 w-full">
          <FiLink className="shrink-0" />
          <input
            type="text"
            className="grow overflow-hidden"
            placeholder="Tiktok link"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />
          <button onClick={handlePaste} className="  btn btn-neutral bg-slate-950 border-none rounded-tl-none rounded-bl-none text-white ">
           {!linkInput && <LiaPasteSolid size={20}  />}
           {linkInput && <IoMdClose  size={20}  />}

          </button>
        </div>
        
        <button disabled={fonction.loading} onClick={() => fonction.handleDownload(linkInput)} className="btn btn-accent w-full md:w-auto bg-gradient">
       { fonction.loading &&  <span className="loading loading-spinner loading-sm"></span>}
          Download
        </button>
      </div>
    </section>
  );
};

export default Hero;
