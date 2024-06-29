import Footer from "../components/footer"
import MainPage from "../components/main"
import Navbar from "../components/navbar"



const Page = () => {
  return (
    <>
         <main className="mx-auto w-ful p-4 sm:w-full md:w-2/3 lg:w-1/2">
        <MainPage data={{title : "TikTok Video downloader" , heading_2 : "Download tiktok video withou watermark" , type : 'video'}} />
    </main>
    </>
  )
}

export default Page