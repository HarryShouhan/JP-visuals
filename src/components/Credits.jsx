import React from 'react'


const Credits = () => {
  return (
    <div>
        <div className="credits flex flex-col items-center gap-4 md:mt-[30vw] lg:gap-[5vw] mt-6 lg:mt-[10vw] px-4">
              <video src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781336063/credit_uvz6rm.mov" autoPlay controls loop muted className="h-40 sm:h-60 lg:h-[50vw] w-full lg:w-auto"></video>
              <p className='text-center font-[font2] text-gray-600 w-full md:text-2xl lg:w-[50vw] text-sm lg:text-base'>Thank you for visiting my portfolio. This space showcases my creative work, skills, and passion for digital content creation. I am constantly learning, improving, and exploring new ideas to deliver high-quality results. Your support and feedback are always appreciated.</p>
        </div>
        
    </div>
  )
}

export default Credits