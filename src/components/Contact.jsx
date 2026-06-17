import React from 'react'

const Contact = () => {
  return (
    <div>
        
        <div id='contact' className="contacts font-[font1] md:h-[25vw] flex mt-[10vh] lg:flex-row lg:mt-[5vw] lg:gap-0">
        <div className="contact-left flex h-auto justify-end lg:h-[15vw] w-full lg:w-[20vw] pr-4 lg:pl-[11vw] border-r-2 lg:border-b-0 lg:border-r-2 mt-4 lg:mt-[5vw] ml-0 lg:ml-[30vw]">
            <ol className='text-right relative md:text-2xl lg:text-right my-auto text-sm lg:text-base'>
                <li className='mb-2 lg:mb-[2vw]'>Whatsapp</li>
                <li className='mb-2 lg:mb-[2vw]'>Email</li>
                <li>Instagram</li>
            </ol>
        </div>


        <div className="contact-left font-[font1] flex h-auto lg:h-[15vw]  w-full lg:w-[20vw] pl-4 lg:pl-[1vw] mt-4 lg:mt-[5vw]">
            <ol className='text-left my-auto text-sm md:text-2xl lg:text-base'>
                <li className='mb-2 lg:mb-[2vw]'>+91 8699052954</li>
                <li className='mb-2 lg:mb-[2vw]'>chouhanh###@gmail.com</li>
                <li><a href="https://www.instagram.com/gpvisuals__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:underline text-blue-700">gpvisuals</a></li>
            </ol>
        </div>
        </div>
    </div>
  )
}

export default Contact