import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const data=useLoaderData()
    const [img,setimg]=useState()
     const navigate=useNavigate()
    return (
        <div className='max-w-7xl m-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2  py-2'>
            <div className='border rounded-md p-2'>
              <img className='rounded-lg m-auto w-[520px] h-[350px] border p-2' src={img ? img :data.thumbnail} alt="thu" />
              <div className='flex justify-center gap-2 py-2'>
                 {data?.images.map((img,index)=><img key={index} onClick={()=>setimg(img)} className='w-[100px] h-[100px] border p-2 cursor-pointer' src={img}/>)}
              </div>
            </div>
             <div className='border rounded-md p-3'>
            <h1 className='text-3xl p-1 bg-[#2967b9] text-white rounded-md mb-2'>Product Id:-{data.id}</h1>
            <p>{data.description}</p>
            <p className='text-2xl font-semibold'>price:{data.price}</p>
            <p className='text-2xl font-semibold'>rating:{data.rating}</p>
            <button onClick={()=>navigate('/user')} className='bg-[#298d9e] text-white py-1 px-[50px] mt-3 rounded-md'>User</button>
             </div>
            </div>
        </div>
    );
};

export default Details;