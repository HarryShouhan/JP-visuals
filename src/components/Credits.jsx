import React from 'react'
import CreditVid from '/vid/credit.MP4';

const Credits = () => {
  return (
    <div>
        <div className="credits flex flex-col items-center gap-[5vw] mt-[10vw]">
              <video src={CreditVid} autoPlay controls loop muted className="h-[50vw]"></video>
              <p className='text-center  text-gray-600 w-[50vw] '>Thank you for visiting my portfolio. This space showcases my creative work, skills, and passion for digital content creation. I am constantly learning, improving, and exploring new ideas to deliver high-quality results. Your support and feedback are always appreciated.</p>
        </div>
        
    </div>
  )
}

export default Credits