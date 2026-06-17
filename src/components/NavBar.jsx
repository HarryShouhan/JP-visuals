import { useGSAP } from '@gsap/react'
import React , { useRef } from 'react'
import gsap from 'gsap';


const NavBar = () => {


    const navAnimation = useRef(null)

    // ____________________animationa______________________________

    useGSAP(function(){
      gsap.from(navAnimation.current,{
        opacity:0,
        duration:5,
        ease:"power2",
        y:-10
      })

    })

// ---------------- navbar---------------

  return (
      <nav id='hero' className='flex flex-row  mt-[4vh]  items-center gap-[10vw]  lg:justify-between pl-2 lg:pl-[3vw] pr-4 lg:pr-[25vw] lg:mt-[1vw] lg:gap-0  h-[40vw] md:h-[20vw] lg:h-[7vw]'>

        <div className="logo">
          <h1 className='uppercase relative lg:static -top-[10vh] w-[17vw] align-middle font-[font-1] font-bold text-xl lg:text-4xl'>gp <span className='text-[2vw] lg:text-[1vw] relative right-2 lg:right-4'>visuals</span></h1>
        </div>

      <div ref={navAnimation} className="nav-2 items-center shadow-1 relative md:justify-around -top-[2vh] right-[12vw] md:-top-[5vw] lg:static lg:h-[4vw]  border-[#232323] border-dotted border-2 h-[10vw] bg-gray-700 lg:h-[3vw] w-[70vw] md:w-[50vw] md:ml-[10vw]  lg:w-[50vw] rounded-full md:flex lg:justify-center align-middle p-2 lg:p-[2vh] sm:text-1 bg-linear-to-r from-gray-100 via-white to-gray-100 bg-size-[200%_200%] animate-gradien">
      

          <ul className='flex flex-row font-[font2] justify-center md:gap-[10vw] lg:flex-row gap-[8vw] lg:gap-[10vw] text-sm lg:text-center '>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'><a href="#creations">Creations</a></li>
            <li className='hover:underline cursor-pointer'><a href="#contact">Contact</a></li>
          </ul>
        </div>
    
    </nav>
  )
}

export default NavBar