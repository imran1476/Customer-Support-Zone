import React from "react";
import vector1 from '../assets/vector1.png'

const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <section className="pt-25 grid grid-cols-1 md:grid-cols-2 gap-6">
<<<<<<< HEAD
       <div className="h-[200px] text-center flex justify-center items-center rounded-lg p-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-md">
         
      <div className="text-xl">In-Progress <br /><span className="mt-6 text-5xl font-bold">{inProgress}</span>
      
    </div>
        
=======
      <div className="rounded-lg p-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-md">
        <div className="text-sm">In-Progress</div>
        <div className="mt-6 text-4xl font-bold">{inProgress}</div>
>>>>>>> ae3db9b (navbar)
      </div>

      <div className="h-[200px] text-center flex justify-center items-center rounded-lg p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md">
         <div className="text-xl ">Resolved <br /><span className="mt-6 text-5xl font-bold ">{resolved}</span></div>
       
      </div>
    </section>
  );
};

export default Banner;
