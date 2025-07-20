import logo from '/public/logo.png'
import React from 'react';
import {FaLinkedin, FaYoutube, FaYoutubeSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import '../../src/index.css'

function Navbar() {
  return (
    <nav className='mb-5 flex items-center justify-between py-2' >
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" className='mx-2 w-15 logo-img'/>
        </div>
        <div className='mx-8 flex items-center justify-center gap-6 text-2xl'>
            <a href="https://www.linkedin.com/in/shubham-maurya-8b7307289/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a href="https://github.com/shubhammaurya0221" target="_blank" rel="noopener noreferrer" ><FaGithub/></a>
            <a href="https://www.instagram.com/maurya.shubham_01/" target="_blank" rel="noopener noreferrer" ><FaInstagram/></a>
            <a href="https://www.youtube.com/@DuoDeveloper01" target="_blank" rel="noopener noreferrer" ><FaYoutube/></a>
        </div>
    </nav>
  )
}

export default Navbar;