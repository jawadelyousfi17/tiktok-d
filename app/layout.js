import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";



const inter = Montserrat({ subsets: ["latin"] ,    weight: ["400", "500", "600", "700", "800", "900"],

});

export const metadata = {
  title: "TiktokMp3 : Tiktok mp3 downloader",
  description: "Convert tiktok video to mp3. Easy, Free and Fast. Its a free tool to convert and download Tiktok to mp3 online. in just 3 steps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
