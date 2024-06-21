import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-accent h-12 mynav">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href='/'>TIKTOK MP3</a>
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-2">
     
      <li>
        <details>
          <summary className='text-lg'>
            all services
          </summary>
          <ul className="p-2 bg-base-100 rounded-sm links ">
            <li><a href='/'>Tiktok MP3 downloader</a></li>
            <li><a href='/tiktok-video-downloader'>Tiktok video downloader</a></li>
            <li><a href='/tiktok-image-downloader'>Tiktok image downloader</a></li>
            <li><a href='/tiktok-slide-downloader'>tiktok slide downloader</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar