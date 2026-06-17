import { useGSAP } from '@gsap/react'
import React , { useRef } from 'react'
import gsap from 'gsap';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function Hero() {

// -----------------------------------text-animation-------------------------

  const DigitaltxtAnimation = useRef(null)
  const designTextAnimation = useRef(null)
  const vedio = useRef(null)
  const btn = useRef(null)
  const textSm = useRef(null)

  useGSAP(function(){
    gsap.from(DigitaltxtAnimation.current,{
      x:-200,
      duration:2,
      ease: "lenia",
      opacity:0,
      delay:1
    })

      gsap.from(designTextAnimation.current,{
      x:200,
      duration:2,
      ease: "leniar",
      opacity:0,
      delay:1
    })

     gsap.from(vedio.current,{
      duration:4,
      ease: "leniar",
      opacity:0,
     
      
    })

      gsap.from(btn.current,{
      duration:1,
      ease: "bounce",
      scale:1.3,
      opacity:0,
      delay:2,
      
    })

     gsap.from(textSm.current,{
      duration:2,
      ease: "leniar",
      x:-30,
      opacity:0,
      delay:3,
      
    })


  })
// --------------------------cursor animation---------------------------------  

const cursorRef = useRef(null)

  
  function mouseOut (){
    if(cursorRef.current){
      gsap.to(cursorRef.current,{
        scale:1,
         onComplete: ()=>{
          cursorRef.current.innerText =""
        },
        

   })
  }
  }

  function mouseIn (){
    if(cursorRef.current){
      gsap.to(cursorRef.current,{
    
      scale:1.5,
   
        ease:"leniar",
        duration:1
   })
  }
  }


const cursor = (dets) =>{
  if(cursorRef.current){
    gsap.to(cursorRef.current,{
      x:dets.x,
      y:dets.y,
      duration:1,
      
    })
  }
}

window.addEventListener("mousemove",cursor)






  const phoneNumber = "+91 8699052954"; // country code + number
  const message = "Hi, I am interested in your service";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };



  return (
    

    <div className="hero h-[65vh]  md:h-[80vh] lg:h-[38vw] w-auto relative overflow-hidden lg:overflow-hidden bg-[url(https://res.cloudinary.com/dpmldj9ki/image/upload/v1781674415/download_10_wbqdwg.jpg)] bg-cover flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-4 lg:gap-0 p-4 lg:p-0">
      {/* cursor */}
      <div ref={cursorRef}  className="cursor shadow-1 pointer-events-none text-amber-50  absolute -left-3 -top-25 rounded-full z-[999] bg-blend-hue text-center align-middle justify-between p-2 text-[0.5vw]"></div>


      <div ref={DigitaltxtAnimation} className="hero-1  text-6xl sm:text-5xl lg:text-7xl custom-font1  absolute top-[5vw] lg:top-2 left-4 md:text-7xl  lg:left-30 ">digital</div>

   

      <div ref={vedio} onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="hero2 w-full lg:w-auto">
         
         
        <video  src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781336026/hero_m8hqs0.mp4" autoPlay loop muted className='hero-vedio shadow-1 border-amber-50 border-2 lg:border-4 rounded-r-md w-[85vw] md:h-[35vh] sm:h-60 lg:h-[25vw] object-cover  lg:w-auto absolute left-[10vw] lg:left-52 top-[14vh] lg:top-18'></video>
      </div>

      <div className="hero-3 h-auto lg:h-75 w-auto lg:w-40 flex relative top-[45vw] lg:top-8 md:top-[34vw] left-1 lg:left-90 p-3">
        <div className="hero-3-top ">
          <button ref={btn} className='btn shadow-1 bg-blue-500 pt-1 pb-1 relative right-[6vw]  custom-font1 w-[25vw] md:h-[8vw] md:text-2xl lg:w-35 text-white text-lg lg:h-[4vw] lg:text-xl rounded-full hover:bg-blue-600 hover:scale-95 ' onClick={openWhatsApp}>Hire Us</button>
          <p ref={textSm} className='w-[60vw] lg:w-[17vw] ml-0 lg:ml-4  custom-font1 mt-2 text-sm lg:text-[1.3vw] md:text-xl '>Passionate about creating modern designs that blend creativity with functionality.
          </p>
        </div>

      </div>
      <div ref={designTextAnimation} className="hero-3-bottom  text-4xl sm:text-5xl lg:text-[6vw] custom-font1 absolute top-[80vw] lg:top-[29vw] left-[60vw] md:top-[50vh]  md:text-7xl lg:left-[63vw] ">designer</div>
    </div>
  );
}

export default Hero