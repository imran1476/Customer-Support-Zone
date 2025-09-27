import React from "react";
 

const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <section className="pt-25 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative h-[200px] rounded-lg p-6 bg-gradient-to-r from-[#9f62f2] to-[#632ee3] text-white shadow-md flex justify-center items-center overflow-hidden">
        
        {/* Images - absolute positioning */}
        <img src="/vector1.png" alt="Vector Left" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-60 h-50" />
        <img src="/vector1.png" alt="Vector Right" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-60 h-50 scale-x-[-1]" />

        {/* Center Text */}
        <div className="text-center text-xl z-10">
          In-Progress <br />
          <span className="mt-6 text-5xl font-bold">{inProgress}</span>
        </div>

      </div>


 <div className="relative h-[200px] rounded-lg p-6 bg-gradient-to-r from-[#00827a] to-[#54cf68] text-white shadow-md flex justify-center items-center overflow-hidden">
        
        {/* Images - absolute positioning */}
        <img src="/vector1.png" alt="Vector Left" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-60 h-50" />
        <img src="/vector1.png" alt="Vector Right" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-60 h-50 scale-x-[-1]" />

        {/* Center Text */}
        <div className="text-center text-xl z-10">
          Resolved <br />
          <span className="mt-6 text-5xl font-bold">{resolved}</span>
        </div>

      </div>
      {/* <div className="h-[200px] text-center flex justify-center items-center rounded-lg p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md">
         <div className="text-xl ">Resolved <br /><span className="mt-6 text-5xl font-bold ">{resolved}</span></div>
       
      </div> */}
    </section>
  );
};

export default Banner;
