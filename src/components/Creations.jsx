import React, { useState, useEffect } from 'react'

const Creations = () => {
  const [selected, setSelected] = useState("designes");

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => {
        if (prev === "designes") return "ai";
        if (prev === "ai") return "vedios";
        return "designes";
      });
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval);
  }, []);

  function selectdesign() {
    setSelected("designes");
  }

  function selectAiCreations() {
    setSelected("ai");
  }

  function selectVedios() {
    setSelected("vedios");
  }
  return (
    <div>
        <div className="page-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-10 md:mt-20 font-[arial] text-[#00000]">Our Creations</h1>

        <div className="creation-container flex flex-col md:flex-row justify-between relative gap-6 md:gap-0 h-auto md:h-[20vw] ml-2 md:ml-[20vw] m-4 md:m-[5vw] mr-2 md:mr-[20vw]">
            <div className="c-left flex w-full md:w-auto">
            <ul className="text-sm sm:text-lg md:text-[2vw] my-auto flex flex-col gap-3 md:gap-0  w-[20vw]">
                <li className={`designes hover:text-base sm:hover:text-xl md:hover:text-[3vw] pointer cursor-pointer transition-all ${selected === "designes" ? "text-base sm:text-xl md:text-[3vw]" : ""}`} onClick={selectdesign}>designes</li>
                <li className={`aiCrestion hover:text-base sm:hover:text-xl md:hover:text-[3vw] pointer cursor-pointer transition-all ${selected === "ai" ? "text-base sm:text-xl md:text-[3vw]" : ""}`} onClick={selectAiCreations}>Ai Creations</li>
                <li className={`vedios hover:text-base sm:hover:text-xl md:hover:text-[3vw] pointer cursor-pointer transition-all ${selected === "vedios" ? "text-base sm:text-xl md:text-[3vw]" : ""}`} onClick={selectVedios}>Vedios</li>
            </ul>
            </div>

            <div className="c-right relative w-full md:w-auto h-80 sm:h-96 md:h-[20vw] md:min-w-[60vw]">
              {selected === "designes" && (
                <>
                  <div className='float-1 bg-black h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-8 left-2 sm:left-6 md:bottom-auto md:left-[26vw] md:right-auto'>
                    {/* Design 1 */}
                  </div>
                  <div className='float-2 bg-gray-100 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-4 left-20 sm:left-32 md:bottom-auto md:left-[28vw] md:right-auto'>
                    {/* Design 2 */}
                  </div>
                  <div className='float-3 bg-blue-500 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-0 left-40 sm:left-60 md:bottom-auto md:left-[30vw] md:right-auto'>
                    {/* Design 3 */}
                  </div>
                </>
              )}
              {selected === "ai" && (
                <>
                  <div className='float-1 bg-purple-500 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-8 left-60 sm:left-6 md:bottom-auto md:left-[26vw] md:right-12'>
                    {/* AI Creation 1 */}
                  </div>
                  <div className='float-2 bg-pink-500 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-4 left-20 sm:left-32 md:bottom-auto md:left-[28vw] md:right-6'>
                    {/* AI Creation 2 */}
                  </div>
                  <div className='float-3 bg-indigo-500 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-0 left-40 sm:left-60 md:bottom-auto md:left-[30vw] md:right-1'>
                    {/* AI Creation 3 */}
                  </div>
                </>
              )}
              {selected === "vedios" && (
                <>
                  <div className='float-1 bg-green-600 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-8 left-2 sm:left-6 md:bottom-auto md:left-[26vw] md:right-12'>
                    {/* Video 1 */}
                  </div>
                  <div className='float-2 bg-yellow-500 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-4 left-20 sm:left-32 md:bottom-auto md:left-[28vw] md:right-6'>
                    {/* Video 2 */}
                  </div>
                  <div className='float-3 bg-orange-500 h-40 sm:h-52 md:h-[20vw] w-32 sm:w-40 md:w-[15vw] shadow-1 rounded-3xl hover:-rotate-10 transition-transform absolute bottom-0 left-40 sm:left-60 md:bottom-auto md:left-[30vw] md:right-1'>
                    {/* Video 3 */}
                  </div>
                </>
              )}
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Creations