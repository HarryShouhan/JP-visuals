import React from 'react'



const Page2 = () => {
  return (
    <div>
        
            <div className="page-2 px-4">
              <div className="bg-black h-0.5 w-[80vw] ml-auto mr-auto" style={{width: 'calc(100% - 2rem)'}}>
                
              </div>
        
                <div className="page-2-text font-bold text-2xl md:text-4xl font-[font-3] text-center mt-4 md:mt-8">specialized in </div>
        
                <div className="logo-seg h-auto md:h-[7vw] border-t-2 border-b-2 border-[#D5A625] border-dashed w-full flex items-center justify-center m-auto mt-4 md:mt-8 py-4 md:py-0 overflow-x-auto">
        
                <div className="logo-container flex gap-4 md:gap-10 shrink-0 md:shrink">
                  <div className="logo w-12 sm:w-16 md:w-[5vw] border-gray-500 h-12 sm:h-16 md:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-12 sm:w-16 md:w-[5vw] border-gray-500 h-12 sm:h-16 md:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-12 sm:w-16 md:w-[5vw] border-gray-500 h-12 sm:h-16 md:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-12 sm:w-16 md:w-[5vw] border-gray-500 h-12 sm:h-16 md:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>
                    <div className="logo w-12 sm:w-16 md:w-[5vw] border-gray-500 h-12 sm:h-16 md:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-12 sm:w-16 md:w-[5vw] border-gray-500 h-12 sm:h-16 md:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-12 sm:w-16 md:w-[5vw] border-gray-500 h-12 sm:h-16 md:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>
                 
                  </div>
                </div>
            </div>
        
        
            <div className="demo flex flex-col md:flex-row mt-8 md:mt-20 gap-4 md:gap-0">
              <div className="demo-left h-auto md:h-[20vw] w-full md:w-[25vw] ml-0 md:ml-[15vw] mt-0 md:mt-[5vw] p-4 border-l-0 md:border-l-2">
                <h1 className="text-lg md:text-[2vw] uppercase font-[arial]">motion meets creativity</h1>
                <p className="text-sm md:text-base">Bringing ideas to life through dynamic edits, smooth transitions, and captivating visuals.</p>
              </div>
        
              <div className="demoright ml-0 md:ml-[5vw] flex flex-col sm:flex-row  w-full md:w-auto">
                <div className="before w-full sm:w-[45%] md:w-[20vw] h-48 sm:h-60 md:h-[30vw] shadow-1 rounded-tl-2xl rounded-bl-2xl border hover:border-[#D5A625] hover:border-4">
                  <video src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781336050/before-demo_fsbcli.mov" autoPlay loop muted className='h-full w-full object-cover rounded-tl-2xl rounded-bl-2xl'></video>
                </div>
              
                <div className="after w-full sm:w-[45%] md:w-[20vw] h-48 sm:h-60 md:h-[30vw] shadow-1 rounded-tr-2xl rounded-br-2xl border hover:border-[#D5A625] hover:border-4">
                    <video src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781339608/vedio_after_wz81kb.mp4" autoPlay loop muted className='h-full w-full object-cover rounded-tr-2xl rounded-br-2xl'></video>
                </div>
              </div> 
              
            </div>
        
    </div>
  )
}

export default Page2