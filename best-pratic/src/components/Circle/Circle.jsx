import React from 'react';
import './circle.css'
import { BsPlayCircleFill } from 'react-icons/bs';

const Circle = () => {
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto'>
         <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div className='border p-2 h-[500px] rounded-md'>
            <h1 className='text-center text-black font-bold py-2 rounded-md bg-[#2cb3d5]'>Custom css</h1>
            <div className='flex  justify-center mt-[25%]'>
                {/* main div start */}
                        <div className="email-btn-mbr">
                            <div className="icon_logo">
                                <BsPlayCircleFill size={60} style={{color:'green'}}/>
                            </div>
                            <div className="circle_waves" style={{animationDelay:'0s'}}></div>
                            <div className="circle_waves" style={{animationDelay:'1s'}}></div>
                            <div className="circle_waves" style={{animationDelay:'2s'}}></div>
                            <div className="circle_waves" style={{animationDelay:'3s'}}></div>
                        </div>
         {/* main div ends */}
            </div>
          </div>
          <div className='border p-2 rounded-md'>
            <h1 className='text-center text-black font-bold py-2 rounded-md bg-[#2cb3d5]'>Tailwind css</h1>
            <div className='flex justify-center mt-[25%]'>
               {/* main work start */}
                        <span class="relative flex h-[100px] w-[100px]">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative flex top-1/12 rounded-full h-[50px] w-[50px] bg-sky-500"></span>
                        </span>
               {/* main work end */}
            </div>
          </div>
         </div>
        </div>
    );
};

export default Circle;