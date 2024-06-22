import Footer from "./components/footer";
import MainPage from "./components/main";
import Navbar from "./components/navbar";



export default function Home() {
  return (
    <>
         <main className="mx-auto w-ful p-4 sm:w-full md:w-2/3 lg:w-1/2">
        <MainPage data={{title : "TikTok MP3 downloader" , heading_2 : "Convert Tiktok video to MP3 online" , type : 'mp3'}} />
    </main>
    </>
  )
}
