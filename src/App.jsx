
import React , { useRef, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';


import Page2 from './components/Page2';
import Creations from './components/Creations';
import Credits from './components/Credits';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

const cursorRef = useRef(null)
const backToTopref = useRef(null)

useGSAP(function(){
  gsap.to(backToTopref.current,{
    y:-15,
    duration:2,
    ease:"power1.inOut",
    yoyo:true,
    repeat:-1
  })
})
  
const cursor = (dets) =>{
  if(cursorRef.current){
    gsap.to(cursorRef.current,{
      x:dets.x,
      y:dets.y,
      duration:1,
      ease:"back.out"
      
    })
  }
}



const [selectedImg, setSelectedImg] = useState(null)




window.addEventListener("mousemove",cursor)

  return (

   

   <div>
        {/* cursor */}
      <div ref={cursorRef}  className="cursor w-[3vw] h-[3vw] absolute -left-3 -top-25 rounded-full z-[999] bg-amber-700">
        <img src="https://res.cloudinary.com/dpmldj9ki/image/upload/v1781460072/IMG-20260614-WA0003_ruckeb.jpg" className='h-full w-full rounded-full' alt="" />
      </div> 


{selectedImg !== null &&(
  

      <div className='  h-screen w-screen fixed backdrop-blur-sm z-999 flex items-center justify-center' onClick={()=>setSelectedImg(null)}>
        <div className='h-auto v-auto shadow-1 border-10 border-amber-50 rounded-2xl 'onClick={(e)=> e.stopPropagation()}>
          <img className='h-auto w-auto object-cover shrink-0 rounded-xl ' src={selectedImg} alt="" />
        </div>
      </div>

)}


       

    <NavBar/>
    <Hero/>
      <button ref={backToTopref} className='shadow-1 h-10 w-10 p-1 fixed bottom-[1vh] left-[80vw] z-999 rounded-full bg-black text-amber-50'><a href="#hero"><i className="fa-solid fa-arrow-up h-2"></i></a></button>

    <Page2/>
    <Creations  onImageClick={setSelectedImg}/>
    <Credits/>
    <Contact/>
    <Footer/>
    

   
   
    


    </div>
      
  
  
  )
}

export default App