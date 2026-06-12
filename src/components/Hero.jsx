import React from 'react'
import myVedio from '/vid/hero.mp4';

const Hero = () => {
  return (
    <div className="hero h-[38vw] w-auto relative overflow-visible bg-[url('/images/download.jpg')] bg-cover flex justify-center ">
      <div className="hero-1 font-bold text-7xl font-[font-3] absolute left-30 top-2 italic">digital</div>

      <div className="hero2">
        <video src={myVedio} autoPlay loop muted className='hero-vedio shadow-1 border-amber-50 border-4 rounded-r-md h-[25vw] absolute left-52 top-18 object-cover'></video>
      </div>

      <div className="hero-3  h-75 w-40 flex relative top-8 left-90 p-3">
        <div className="hero-3-top">
          <button className='btn shadow-1 bg-blue-500 pt-1 pb-1 font-[arial]  w-35 text-white text-2xl rounded-full hover:bg-blue-600'>hire us</button>
          <p className='w-[17vw] ml-4 mt-2 text-[1.3vw] '>Passionate about creating modern designs that blend creativity with functionality.
          </p>
        </div>
       
      </div>
       <div className="hero-3-bottom align- font-bold text-[6vw] font-[font-3] absolute top-[29vw] left-[61vw] italic">designer</div>
    </div>
  )
}

export default Hero