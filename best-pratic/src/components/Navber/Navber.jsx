import './Navber.css'
import { useEffect, useState } from "react"
import logo from '../../assets/llogo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function Navber() {
 const [toggle,setoogle]=useState(false)
//  desktop menu
useEffect(() => {
  const dropdowns = document.querySelectorAll("#opensub"); // Use class instead of ID
  const handleClick = (event) => {
    event.currentTarget.querySelector(".Lsub").classList.toggle("Lsubadd");
    event.stopPropagation();
  };
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", handleClick);
  });

  // Clean Up data
  return () => {
    dropdowns.forEach((dropdown) => {
      dropdown.removeEventListener("click", handleClick);
    });
  };
}, []); 

  return (
    <header className="bg-[#bc4749] text-white">
      <div className="w-11/12 lg:max-w-7xl m-auto flex justify-between items-center py-3">
        <Link to="/"> <img className="w-[200px] lg:w-[250px]" src={logo} alt="logo" /></Link>
        <ul className="hidden relative lg:flex space-x-5">
          <li id="opensub" className="cursor-pointer"><span className="flex items-center">Home<FaAngleDown/></span>
           <ul className="Lsub space-y-1">
             <li>Main Demo</li>
             <li>Online Course</li>
             <li>E-Learning</li>
             <li>Distance Lean</li>
             <li>Courses Hub</li>
             <li>Freelancing</li>
           </ul>
          </li>
          <li className="cursor-pointer">About</li>
          <li id="opensub" className="cursor-pointer"><span className="flex items-center">Courses <FaAngleDown/></span>
          <ul  className="Lsub space-y-1">
             <li>Courses One</li>
             <li>Courses Two</li>
             <li>Courses Three</li>
             <li>Courses Four</li>
             <li>Courses Five</li>
             <li>Courses Six</li>
           </ul>
          </li>
          <li id="opensub" className="cursor-pointer"><span className="flex items-center">Pages<FaAngleDown/></span>
          <ul className="Lsub space-y-1">
             <li>Pages One</li>
             <li>Pages Two</li>
             <li>Pages Three</li>
             <li>Pages Four</li>
             <li>Pages Five</li>
             <li>Pages Six</li>
           </ul>
          </li>
          <li className="cursor-pointer">Block</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div onClick={()=>setoogle(!toggle)} className="lg:hidden cursor-pointer">
          {toggle ?  <FaTimes size={20}/> :<AiOutlineMenu size={20}/>}
         
        </div>
      </div>
      {/* Mobile Menu for website ---------------------------------*/}
      <div className={`${toggle ? 'fixed transition-all top-0 left-0 p-3 w-3/4 h-full bg-[#BC4749] lg:hidden':'fixed top-0 left-[-100%] p-3 w-3/4 h-full bg-[#BC4749] duration-500 lg:hidden'}`}>
      <img className="w-[200px] mb-3 lg:hidden lg:w-[250px]" src={logo} alt="logo" />
      <ul className="relative space-y-1">
          <li id="opensub" className="cursor-pointer"><span className="flex items-center">Home<FaAngleDown/></span>
           <ul className="Lsub !bg-[#d25c5e] rounded-md w-full space-y-1">
             <li>Main Demo</li>
             <li>Online Course</li>
             <li>E-Learning</li>
             <li>Distance Lean</li>
             <li>Courses Hub</li>
             <li>Freelancing</li>
           </ul>
          </li>
          <li className="cursor-pointer">About</li>
          <li id="opensub" className="cursor-pointer"><span className="flex items-center">Courses <FaAngleDown/></span>
          <ul  className="Lsub  !bg-[#d25c5e] rounded-md w-full space-y-1">
             <li>Courses One</li>
             <li>Courses Two</li>
             <li>Courses Three</li>
             <li>Courses Four</li>
             <li>Courses Five</li>
             <li>Courses Six</li>
           </ul>
          </li>
          <li id="opensub" className="cursor-pointer"><span className="flex items-center">Pages<FaAngleDown/></span>
          <ul className="Lsub  !bg-[#d25c5e] rounded-md w-full space-y-1">
             <li>Pages One</li>
             <li>Pages Two</li>
             <li>Pages Three</li>
             <li>Pages Four</li>
             <li>Pages Five</li>
             <li>Pages Six</li>
           </ul>
          </li>
          <li className="cursor-pointer">Block</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Navber;