import React, { useEffect, useState } from 'react'
import { HeaderStyledComponent, Logo, 
  Events, WindowViewNav, ThemeSettings, IconSection 
} from "../styles/Header.styled"
import { BiMoon, BiSun, BiQr, BiLogoFacebook, BiLogoTelegram, BiLogoTiktok, BiInfoCircle, BiPhone, BiUserCircle, BiLogoBlogger, BiLogoTripAdvisor, BiEnvelope, BiCog, BiNotification, BiLogoMicrosoft, BiImage } from "react-icons/bi";
import { RiTwitterXLine, RiWhatsappLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigationHook } from '../context/hooks/navigation.hook';
import { Link } from "react-router-dom";


const Header = ({ toggleMode, mode, managrEvents }) => {
  const { handleAlertofComplition } = useNavigationHook();
  const [shownav, setShowNav] = useState(false)

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
   <HeaderStyledComponent>
    <div className='Leftflex'>
      <Logo><strong>MG</strong></Logo>
      <Events>
      <BiQr size={15} onClick={managrEvents}/>
      </Events>
    </div>
    
   <WindowViewNav isopen={shownav}>
     <div className='TopNavigation'>
       <div className='Iconclose'>
        <FaBars size={15} onClick={()=>setShowNav(!shownav)}/>
       </div>
       <Logo>MG</Logo>
     </div>

     <div className='Scrollofset'>
      <div className='Navigationlinks'>
        <Link to="/" className='SingleLink'>
          <BiLogoMicrosoft className='Linkicon'/>&nbsp;&nbsp;<li>Home</li>
        </Link>
        <Link to="/about" className='SingleLink'>
          <BiInfoCircle className='Linkicon'/>&nbsp;&nbsp;<li>About</li>
        </Link>
        <Link to="/contacts" className='SingleLink'>
          <BiPhone className='Linkicon'/>&nbsp;&nbsp;<li>Contact</li>
        </Link>
        <Link to="/services" className='SingleLink'>
          <BiUserCircle className='Linkicon'/>&nbsp;&nbsp;<li>Services</li>
        </Link>
        <Link to="/gallery" className='SingleLink'>
          <BiImage className='Linkicon'/>&nbsp;&nbsp;<li>Gallery</li>
        </Link>
      </div>
     
      <div className='Navigationlinks'>
        <Link to="/blogs" className='SingleLink'>
          <BiLogoBlogger className='Linkicon'/>&nbsp;&nbsp;<li>Blogs</li>
        </Link>
        <Link to="/events" className='SingleLink'>
          <BiLogoTripAdvisor className='Linkicon'/>&nbsp;&nbsp;<li>Events</li>
        </Link>
        <Link to="/notification" className='SingleLink'>
          <BiNotification className='Linkicon'/>&nbsp;&nbsp;<li>Notifications</li>
        </Link>
      </div>

      <div className='Navigationlinks'>
        <Link to="/subscriptions" className='SingleLink'>
          <BiEnvelope className='Linkicon'/>&nbsp;&nbsp;<li>Subscriptions</li>
        </Link>
        <Link to="/settings" className='SingleLink'>
          <BiCog className='Linkicon'/>&nbsp;&nbsp;<li>Settings</li>
        </Link>
      </div>
     </div>

     <div className='Footersection'>
       {shownav?<p>Copy&copy;2023Gtech.com</p>:<p>&copy;23</p>}
     </div>
    </WindowViewNav>
    
   
    <div className='Rightflex'>
      <IconSection onClick={handleAlertofComplition}>
        <BiLogoFacebook size={15} className='Socioiconset'/>
        <RiTwitterXLine size={15} className='Socioiconset'/>
        <RiWhatsappLine size={15} className='Socioiconset'/>
        <BiLogoTelegram size={15} className='Socioiconset'/>
        <BiLogoTiktok size={15} className='Socioiconset'/>
      </IconSection>

      <ThemeSettings>
      {mode === "dark" ? <BiSun size={15} onClick={toggleMode} color={mode==="dark"?"white":"black"}/>
      : <BiMoon size={15} onClick={toggleMode} color={mode==="dark"?"white":"black"}/>}
      </ThemeSettings>
    </div>
   </HeaderStyledComponent>
  )
}

export default Header
