import React from 'react'
import logo from "../assets/Thiru_Logo2.png";
import {FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
// import { DiNancy } from "react-icons/di";


const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className='mx-5 w-10' src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href='https://www.linkedin.com/in/thiru-react-dev/' target='#blank'>
        <FaLinkedin class="hover:fill-blue-500 cursor-pointer" /></a>
        <a href='https://github.com/Thirushub?tab=repositories' target='#blank'>
        <FaGithub class="fill-current bg-black text-violet-500 cursor-pointer" /></a>
        <FaInstagram class="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md cursor-pointer"/>
        {/* <FaSquareXTwitter/> */}
        <a href='https://mail.google.com/a/thirudharshu.mca@gmail.com/mail/#compose' target='#blank'>
        <BiLogoGmail className="fill-red-500 cursor-pointer" />
        </a>
    </div>
  </nav>
  
}

export default Navbar