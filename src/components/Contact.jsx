import React from 'react'

const Contact = () => {
  return (
    <div>
        
        <div className="contacts flex mt-[5vw]">
        <div className="contact-left flex h-[15vw]  w-[20vw] pl-[11vw] border-r-2 mt-[5vw] ml-[30vw]">
            <ol className='text-right my-auto '>
                <li className='mb-[2vw]'>whatsapp</li>
                <li  className='mb-[2vw]'>Email</li>
                <li>Instagram</li>
            </ol>
        </div>


        <div className="contact-left flex h-[15vw] w-[20vw] pl-[1vw] mt-[5vw]">
            <ol className='text-lrft my-auto '>
                <li className='mb-[2vw]'>+91 77103xxx03</li>
                <li  className='mb-[2vw]'>chouhanh###@gmail.com</li>
                <li><a href="">click</a></li>
            </ol>
        </div>
        </div>
    </div>
  )
}

export default Contact