import React from 'react'
import AfterVedio from '/vid/demo-after.MP4';
import BeforeVedio from '/vid/before-demo.MOV';

const Page2 = () => {
  return (
    <div>
        
            <div className="page-2">
              <div className="bg-black h-0.5 w-[80vw] ml-[10vw]">
                
              </div>
        
                <div className="page-2-text font-bold text-4xl font-[font-3] text-center mt-8 ">speclizied in </div>
        
                <div className="logo-seg h-[7vw] border-t-2 border-b-2 border-[#D5A625] border-dashed w-full  flex items-center justify-center m-auto mt-8">
        
                <div className="logo-container flex gap-10">
                  <div className="logo w-[5vw] border-gray-500 h-[5vw] rounded-full border-2 border-dotted overflow-hidden">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-[5vw] border-gray-500 h-[5vw] rounded-full border-2 border-dotted overflow-hidden">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-[5vw] border-gray-500 h-[5vw] rounded-full border-2 border-dotted overflow-hidden">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-[5vw] border-gray-500 h-[5vw] rounded-full border-2 border-dotted overflow-hidden">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>
                    <div className="logo w-[5vw] border-gray-500 h-[5vw] rounded-full border-2 border-dotted overflow-hidden">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-[5vw] border-gray-500 h-[5vw] rounded-full border-2 border-dotted overflow-hidden">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>

                    <div className="logo w-[5vw] border-gray-500 h-[5vw] rounded-full border-2 border-dotted overflow-hidden">
                    <img src="" className='object-cover h-full w-full' alt="" />
                  </div>
                 
                  </div>
                </div>
            </div>
        
        
            <div className="demo flex mt-20">
              <div className="demo-left  h-[20vw] w-[25vw] ml-[15vw] mt-[5vw] p-4 border-l-2" >
                <h1 className="text-[2vw] uppercase font-[arial]">motion meets creativity</h1>
                <p>Bringing ideas to life through dynamic edits, smooth transitions, and captivating visuals.</p>
              </div>
        
              <div className="demoright ml-[5vw] ">
                <div className="before  w-[20vw] h-[30vw] shadow-1 rounded-tl-2xl rounded-bl-2xl border hover:border-[#D5A625] hover:border-4" >
                  <video src={BeforeVedio} autoPlay loop muted className='h-full w-full object-cover rounded-tl-2xl rounded-bl-2xl'></video>
                </div>
              </div> 
                <div className="after  w-[20vw] h-[30vw] shadow-1 rounded-tr-2xl rounded-br-2xl border" >
                    <video src={AfterVedio} autoPlay loop muted className='h-full w-full object-cover rounded-tr-2xl rounded-br-2xl  hover:border-[#D5A625] hover:border-4'></video>
                </div>
              
            </div>
        
    </div>
  )
}

export default Page2