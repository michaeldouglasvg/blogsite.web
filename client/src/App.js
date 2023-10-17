import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Globalstyles from "./styles/Globals/Globals.styled"
import Header from "./pages/Header"
import Home from "./pages/Home";
import QRCodeGenerator from "./pages/Qrcode";
import { QRcodeScannerStyles } from "./styles/QRcode.styled";
import { Button } from "./components/Button.styled";
import { NavigationContextApiProvider } from "./context/Navigations";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contacts from "./pages/Contacts"
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";

function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
  const[qrcode, setQrcode] = React.useState(false)

   const managrEvents = () => {
    setQrcode(true)
  }

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  }

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  useEffect(() => {
    document.body.classList.add(mode);
    return () => {
      document.body.classList.remove(mode);
    };
  }, [mode]);

  const theme = {
    colors: {
      header: "skyblue",
      body: mode === "dark" ? '#01272f' : 'whitesmoke',
      footer: "grey ",
      color: mode === "dark" ? 'white' : '#1a1a28',
      border: mode === "dark" ? "1px solid #333333" : "1px solid #c6c6c6",
      boxshadow: mode === "dark" ? "0 0 5px 1px rgba(255, 255, 255, .1)" : "0 0 5px 1px rgba(0, 0, 0, .1)",
      transparent: mode === "dark" ? "rgba(255, 255, 255, .8)" : "rgba(0, 0, 0, .8)"
    },

    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px"
    },

    flex: {
      chosedirection: "column",
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContextApiProvider>
        <Globalstyles />
          {qrcode && <QRcodeScannerStyles>
            <div className='Code'>
              <QRCodeGenerator />
              <div className="QRcodebtn">
                <Button bg='orangered' clr='white' onClick={() => {setQrcode(false)}}>Close QR Code</Button>
              </div>
            </div>
          </QRcodeScannerStyles>}

          <Router>
            <Header toggleMode={toggleMode} mode={mode} managrEvents={managrEvents}/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Router>
       
      </NavigationContextApiProvider>
    </ThemeProvider>
  );
}

export default App;
