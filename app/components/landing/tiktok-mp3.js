import Image from 'next/image'

import { MdHelpCenter } from "react-icons/md";


const TiktokMp3 = () => {
  return (
    <div className=' space-y-4'>
        <h3 className='text-lg font-semibold'>
            Convert any Tiktok video to MP3 in 3 steps
        </h3>
        <p>
            <a href='/'>TiktokMp3.online</a> allows you to download any tiktok video as mp3 format. its a free tool to convert and download Tiktok to mp3 online. in just 3 steps : 
        </p>
        <div className="flex gap-4  items-center mb-4 mt-4">
          <span className="text-lg font-semibold gradient">Copy</span>
          <img src="/icons/arrow.png"className="w-6"></img>
          <span className="text-lg font-semibold gradient">Paste</span>
          <img src="/icons/arrow.png" className="w-6"></img>
          <span className="text-lg font-semibold gradient">Download</span>
        </div>
        {/* <b className='text-lg font-semibold mb-4'>How To convert Tiktok to MP3?</b> */}
        <p className='text-lg font-semibold'>How dose it works ?</p>
        <ol className='space-y-4'>
            <li>
                Open tiktok and choose the video you want to download
                
            </li>
            <li>
                <p className='text-md font-medium mb-2'>Click Share</p>
                <Image
                    src={'/images/screen1.jpg'}
                    alt='Tiktok to mp3 Click share'
                    width={300}
                    height={400}
                    className=' rounded-lg w-full md:w-1/2'
                ></Image>
            </li>

            <li>
                <p className='text-md font-medium mb-2'>Copy the link</p>
                <Image
                    src={'/images/screen2.jpg'}
                    alt='Tiktok to mp3 copy the link'
                    width={300}
                    height={400}
                    className=' rounded-lg w-full md:w-1/2'
                ></Image>
            </li>

            <li>
                <p className='text-md font-medium mb-2'>Open <a href='/'>TiktokMp3.online</a> then Paste the tiktok video link </p>
                <Image
                    src={'/images/screen4.jpg'}
                    alt='Tiktok to mp3 Click share'
                    width={300}
                    height={400}
                    className=' rounded-lg w-full md:w-1/2'
                ></Image>
            </li>
            <li>
                <p className='text-md font-medium mb-2'>Press download and wait until the video is fetched</p>
                <Image
                    src={'/images/screen5.jpg'}
                    alt='Tiktok to mp3 Click share'
                    width={300}
                    height={400}
                    className=' rounded-lg w-full md:w-1/2'
                ></Image>
            </li>

            <li>
                <p className='text-md font-medium mb-2'>Press download MP3 </p>
                <Image
                    src={'/images/screen6.jpg'}
                    alt='Tiktok to mp3 Click share'
                    width={300}
                    height={400}
                    className=' rounded-lg w-full md:w-1/2'
                ></Image>
            </li>
            
        </ol>


        <div className='space-y-4'>
            <span className='text-xl font-bold gradient'>Frequently asked questions
            </span>
            <div>
              <div className='flex gap-2 items-center'>
            <MdHelpCenter />
                <h3 className='text-lg font-semibold'>How to convert tiktok to MP3 ?</h3>
            </div>
            <div>
                To convert tiktok video to MP3 format, first you need to get the tiktok video link, its easy :
                <ul className='list'>
                    <li>
                        Open tiktok
                    </li>
                    <li>
                        click share button
                    </li>
                    <li>
                        Click copy the link button
                    </li>
                    <li>
                        Open TiktokMp3.online then paste the link
                    </li>
                    <li>
                        wait a couple of seconds then click download Mp3
                    </li>
                    </ul> 
            </div>   
            </div>

            <div>
            <div className='flex gap-2 items-center'>
            <MdHelpCenter />
                <h3 className='text-lg font-semibold'>Why is the Tiktok video downloader not working?</h3>
            </div>
            <div>
                If the Video downloader or the Mp3 downloader not working, it could due to :
            <ul className='list'>
                    <li>
                        An invalid Tiktok url 
                    </li>
                    <li>
                       Browser copability problems
                    </li>
                    <li>
                        Internet connectivity problems
                    </li>
                    </ul> 
            </div>
            </div>
           
            <div>
            <div className='flex gap-2 items-center'>
            <MdHelpCenter />
                <h3 className='text-lg font-semibold'>What is a TikTok MP3 Downloader?</h3>
            </div>
            <div>
                TiktokMp3.online is a tool that allows users to extract audio from tiktok video and save it as an mp3 file.
            </div>
            </div>
    
        </div>

    </div>
  )
}

export default TiktokMp3