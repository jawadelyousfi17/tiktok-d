"use client"

import Lottie from 'react-lottie';
import animationData from '@/animations/404.json';


export default function Custom404() {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
   
  };

    return <section className=" w-full md:w-1/2 mx-auto  pb-20  flex flex-col items-center ">
       <Lottie options={defaultOptions} height={ } width={ } />   
          <h2 className='text-3xl font-bold'>Could not find this page</h2>

    </section>
  }