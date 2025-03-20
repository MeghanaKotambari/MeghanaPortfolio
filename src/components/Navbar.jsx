import React from "react";

const Navbar = () => {
  return (
    <div className="text-white w-60 h-full ">
      <div className="flex items-center gap-3 border-b border-r p-5 border-gray-500">
        <div className="w-5 h-5 rounded-full bg-red-500"></div>
        <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
        <div className="w-5 h-5 rounded-full bg-green-500"></div>
      </div>
      <div>
        <div className='my-3 p-5 '>
            <p className="text-xl text-gray-400 font-semibold">Categories</p>
            <ul className="pl-10 flex flex-col gap-3 mt-2 font-semibold"> 
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education</li>
            </ul>
        </div>
        <div className='my-3 p-5 '>
            <p className="text-xl text-gray-400 font-semibold">Social Links</p>
            <ul className="pl-10 flex flex-col gap-3 mt-2 font-semibold">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Phone</li>
                <li>Email</li>
                
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
