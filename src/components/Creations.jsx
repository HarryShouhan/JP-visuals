import React from 'react'

const Creations = () => {
  return (
    <div>
        <div className="page-3">
        <h1 className="text-5xl text-center mt-20 font-[arial] text-[#00000]">Our Creations</h1>

        <div className="creation-container  justify-between relative  h-[20vw] ml-[20vw] m-[5vw] mr-[20vw] flex">
            <div className="c-left flex ">
            <ul className="text-[2vw] my-auto">
                <li className='hover:text-[3vw]'>designes</li>
                <li  className='hover:text-[3vw]'>Ai Creastions</li>
                <li className='hover:text-[3vw]'>Vedios</li>
            </ul>
            </div>

            <div className="c-right ">
            <div className='bg-black h-[20vw] absolute right-12 w-[15vw]   shadow-1 rounded-3xl hover:-rotate-10'>
                
            </div>
                <div className='bg-gray-100 h-[20vw] right-6 absolute w-[15vw]  shadow-1 rounded-3xl hover:-rotate-10'>

                </div>
                <div className='bg-red-500 h-[20vw] right-1 absolute w-[15vw] shadow-1  rounded-3xl hover:-rotate-10'>

                </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Creations