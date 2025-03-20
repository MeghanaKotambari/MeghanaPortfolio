import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
// import background from "./assets/video.mp4"


function App() {

  return (
    <>
     <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-screen h-screen overflow-y-hidden absolute top-0 left-0'>
      <img src="https://amiralirashidi.github.io/assets/videos/background.png" />
      {/* <video className='' src={background} autoPlay loop muted></video> */}

      </div>
      <div className='h-[700px] w-5/6  bg-gray-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 '>

      <Navbar/>
      </div>
     </div>
    </>
  )
}

export default App
