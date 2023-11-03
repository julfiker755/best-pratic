import React, { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
    
      // update state on toggle
      const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      };
    
      // set theme state in localstorage on mount & also update localstorage on state change
      useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
      }, [theme]);
    return (
        <div>
            <ul className='flex bg-rose-800 text-white py-2 justify-center space-x-4 items-center font-bold'>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/pichart">PicChart</NavLink></li>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/user">User</NavLink></li>
                <li><NavLink className={({ isActive}) => isActive ? 'text-[#34a83c]':""} to="/navber">Navber</NavLink></li>
                 <li><input type="checkbox" onClick={(e)=> handleToggle(e)} className="toggle toggle-success" /></li>
                {/*        onChange={handleToggle}   =It is best solution        */}
            </ul>
        </div>
    );
};

export default Header;
