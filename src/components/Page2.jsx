import { useGSAP } from '@gsap/react'
import React , { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


const Page2 = () => {

  gsap.registerPlugin(ScrollTrigger)


  // -------------------------------------logo-arrey-------------------------


const logoStak =[
  {
    key:1,
    url:"https://res.cloudinary.com/dpmldj9ki/image/upload/v1781545851/Ae-logo_fnuth0.png"
  },
   {
    key:2,
    url:"https://res.cloudinary.com/dpmldj9ki/image/upload/q_auto/f_auto/v1781545885/photoshop-logo_i94szm.png"
  },
   {
    key:3,
    url:"https://res.cloudinary.com/dpmldj9ki/image/upload/v1781545886/pr-logo_x7fqk6.png"
  },
  {
    key:4,
    url:"https://res.cloudinary.com/dpmldj9ki/image/upload/v1781546563/images_u5mexc.jpg"
  }
]

  // --------aminamtons-------

  const logos = useRef([null])
  const p2Hedding =useRef(null)
  const text = useRef(null)
  const textPera = useRef(null)
  const vedioBefor = useRef(null)
  const vedioAfter = useRef(null)


  useGSAP(()=>{

     const tl = gsap.timeline({
         scrollTrigger:{
            start:"top 80%",
            end:"bottom 50%",
            // markers:true,
            trigger:logos.current,
            scrub:true
            },
     });
         logos.current.forEach((logo)=>{
       
    
      tl.from(logo,{
          y:100,
          opacity:0,
          ease:"power-4",
      });
    
    });

    gsap.from(p2Hedding.current,{
      scrollTrigger:{
        start:"top 90%",
        end:"bottom 80%",
       
        // markers:true,
        trigger:p2Hedding.current,
         scrub:true
      },
      opacity:0,
      y:100
    })

// ---------------------------------part-2----------------------------------------


    gsap.from(text.current,{
      scrollTrigger:{
        start:"top 90%",
        end:"bottom 80%",
        // markers:true,
        trigger:text.current,
        scrub:true
     },
      x:-500,
      duration:2,
      opacity:0

    })

    
    gsap.from(textPera.current,{
      scrollTrigger:{
        start:"top 90%",
        end:"bottom 80%",
        // markers:true,
        trigger:textPera.current,
         scrub:true
     },
      x:-500,
      duration:2,
      opacity:0

    })


    
    gsap.from(vedioBefor.current,{
      scrollTrigger:{
        start:"top 90%",
        end:"bottom 80%",
        // markers:true,
        trigger:vedioBefor.current,
         scrub:true
     },
      x:-100,
      duration:2,
      opacity:0,
      delay:2

    })

      gsap.from(vedioAfter.current,{
      scrollTrigger:{
        start:"top 90%",
        end:"bottom 80%",
        // markers:true,
        trigger:vedioAfter.current,
         scrub:true
     },
      x:100,
      duration:2,
      opacity:0,
      delay:2

    })

    });

  




  return (
    <div>
        
            <div className="page-2 px-4">
              <div className="bg-black h-0.5 w-[80vw] ml-auto mr-auto" style={{width: 'calc(100% - 2rem)'}}>
                
              </div>
        
                <div ref={p2Hedding} className="page-2-text md:mt-[10vh] text-2xl lg:text-4xl custom-font1 md:text-4xl text-center mt-4 lg:mt-8">Specialized in </div>
        
                <div className="logo-seg h-auto lg:h-[7vw]  w-full flex items-center justify-center m-auto mt-4 lg:mt-8 py-4 lg:py-0 overflow-y-hidden overflow-x-auto">
        
                <div className="logo-container flex gap-4 lg:gap-10 shrink-0 lg:shrink">

                {
                  logoStak.map(function(elem , index){
                    return(
                      
                  <div ref={(el) => (logos.current[index]= el)} className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0 hover:scale-90 ">
                    <img src={elem.url} className='object-cover h-full w-full' alt="" />
                  </div>
                    )
                  })
                }

            {/* //       <div className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0 hover:scale-90 ">
            //         <img src="n" className='object-cover h-full w-full' alt="" />
            //       </div>

            //         <div className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0  hover:scale-90">
            //         <img src="n" className='object-cover h-full w-full' alt="" />
            //       </div>

            //         <div className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0 hover:scale-90 ">
            //         <img src="n" className='object-cover h-full w-full' alt="" />
            //       </div>

            //         <div className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0 hover:scale-90">
            //         <img src="n" className='object-cover h-full w-full' alt="" />
            //       </div>
            //         <div className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0 hover:scale-90">
            //         <img src="n" className='object-cover h-full w-full' alt="" />
            //       </div>

            //         <div className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0 hover:scale-90">
            //         <img src="n" className='object-cover h-full w-full' alt="" />
            //       </div>

            //         <div className="logo w-12 sm:w-16 lg:w-[5vw] border-gray-500 h-12 sm:h-16 lg:h-[5vw] rounded-full border-2 border-dotted overflow-hidden shrink-0 hover:scale-90">
            //         <img src="n" className='object-cover h-full w-full' alt="" />
            //       </div>
                  */}
                  </div>
                </div>
            </div>
        
        
            <div className="demo flex flex-col md:mt-[10vh] md:flex-row overflow-hidden lg:flex-row mt-8 lg:mt-20 gap-4 lg:gap-0">
              <div  className="demo-left overflow-hidden h-auto lg:h-[20vw] w-full lg:w-[25vw] ml-0 lg:ml-[15vw] relative md:top-[4vw] mt-0 lg:mt-[5vw] p-4 border-l-0 lg:border-l-2">
                <h1 ref={text} className="text-xl lg:text-[2vw] md:text-3xl uppercase custom-font2">motion meets creativity</h1>
                <p ref={textPera} className="custom-font1 text-sm lg:text-base md:text-xl">Bringing ideas to life through dynamic edits, smooth transitions, and captivating visuals.</p>
              </div>
        
              <div className="demoright ml-[10vw] lg:ml-[5vw] flex  sm:flex-row  w-[80vw] h-auto  lg:w-auto">
                <div ref={vedioBefor}  className="before w-full sm:w-[45%] lg:w-[20vw] h-48 sm:h-60 lg:h-[30vw] shadow-1 rounded-tl-2xl rounded-bl-2xl border hover:border-[#D5A625] hover:border-4">
                  <video src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781336050/before-demo_fsbcli.mov" autoPlay loop muted className='h-full w-full object-cover rounded-tl-2xl rounded-bl-2xl'></video>
                </div>
              
                <div ref={vedioAfter}  className="after w-full sm:w-[45%] lg:w-[20vw] h-48 sm:h-60 lg:h-[30vw] shadow-1 rounded-tr-2xl rounded-br-2xl border hover:border-[#D5A625] hover:border-4">
                    <video src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781339608/vedio_after_wz81kb.mp4" autoPlay loop muted className='h-full w-full object-cover rounded-tr-2xl rounded-br-2xl'></video>
                </div>
              </div> 
              
            </div>
        
    </div>
  )
}

export default Page2