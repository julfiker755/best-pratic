import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useThame from '../Hooks/useThame';

const Header = () => {
   const {Changetheme,mode}=useThame()
    return (
        <div className='bg-[#27899a] text-white'>
            <ul className='flex justify-center py-2 space-x-3'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li onClick={()=>Changetheme()} className='cursor-pointer bg-[#9ab2b7] px-[1px] rounded-md'>
                    {mode === 'light' ? 'Dark':'Light'}
                </li>
            </ul>
        </div>
    );
};

export default Header;