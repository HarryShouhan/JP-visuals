import React from 'react'
const NavBar = () => {
  return (
      <nav className='flex  items-center justify-between pl-[3vw] pr-[25vw] mt-[1  vw] h-[7vw] '>

        <div className="logo">
          <h1 className='uppercase align-middle  font-[font-1] font-bold text-4xl'>gp <span className='text-[1vw] relative right-4 '>visuals</span></h1>
        </div>

      <div className="nav-2 shadow-1 border-[#232323]  border-dotted border-2  h-[5vw] w-[50vw] rounded-full flex justify-center align-middle  p-[3vh] bg-linear-to-r from-gray-100 via-white to-gray-100 bg-size-[200%_200%] animate-gradien">
      

          <ul className='flex gap-40'>
            <li className='hover:underline'>home</li>
            <li className='hover:underline'>about</li>
            <li className='hover:underline'>contact</li>
          </ul>
        </div>
    
    </nav>
  )
}

export default NavBar