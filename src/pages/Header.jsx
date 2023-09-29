import React, { useEffect } from 'react'
import { HeaderStyledComponent, Logo, 
  Events, HeaderNavLinks, WindowViewNav, ThemeSettings } from "../styles/Header.styled"

import { BiMoon, BiSun } from "react-icons/bi";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ toggleMode, mode, managrEvents }) => {
  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
   <HeaderStyledComponent>
    <Logo><img src={process.env.PUBLIC_URL+'/images/sitelogo2.jpg'} alt="description"/></Logo>
    <Events>
     <p onClick={managrEvents}>QR~CODE</p>
    </Events>
    {/* Smaill screen navigation */}
    <HeaderNavLinks>
    </HeaderNavLinks>
    {/* Large screen navigation */}
    <WindowViewNav>
      <ul>
        <li>Services</li>
        <li>Contacts</li>
        <li>Blogs</li>
        <li>Gallery</li>
      </ul>
    </WindowViewNav>
    <ThemeSettings>
     {mode === "dark" ? <BiSun size={30} onClick={toggleMode} color={mode === "dark" ? "white" : "black"}/>
     : <BiMoon size={30} onClick={toggleMode} color={mode === "dark" ? "white" : "black"}/>}
    </ThemeSettings>
   </HeaderStyledComponent>
  )
}

export default Header
