import React from 'react'
import { GalleryCardssection, GalleryMainDisplay } from '../styles/Gallery.styled'
import { BiChevronDownCircle } from 'react-icons/bi'

const Gallery = () => {
  const[toogleeffects, setToggleeffects] = React.useState(false)
  return (
    <GalleryMainDisplay>
      <div className='TopGallerylinks'>
        <h1>Our Gallery</h1>
        <div className='Effects'>
          <div className='buttoneffect' onClick={() => setToggleeffects(!toogleeffects)}>
            <p>Effects</p>
            <BiChevronDownCircle size={20} style={{transform: toogleeffects && "rotate(-180deg)"}}/>
          </div>
          {toogleeffects && <div className="Dropdownoptions" onClick={() => setToggleeffects(!toogleeffects)}>
            <p>Rotate 360&deg;</p>
            <p>Rotate Y-180&deg;</p>
            <p>Rotate X-180&deg;</p>
            <p>Rotate Z-180&deg;</p>
            <p>None (No Effects)</p>
          </div>}
        </div>
      </div>
      <GalleryCardssection>
        <div className='Imagediv'>
          <img src={process.env.PUBLIC_URL+'/images/img.webp'} alt="description"/>
          <img src={process.env.PUBLIC_URL+'/images/gallary.webp'} alt="description"/>
          <img src={process.env.PUBLIC_URL+'/images/images (5).jpg'} alt="description"/>
        </div>
        <div className='Imagediv'>
          <img src={process.env.PUBLIC_URL+'/images/img2.jpg'} alt="description"/>
          <img src={process.env.PUBLIC_URL+'/images/images.jpg'} alt="description"/>
          <img src={process.env.PUBLIC_URL+'/images/gallery.jpg'} alt="description"/>
        </div>
        <div className='Imagediv'>
          <img src={process.env.PUBLIC_URL+'/images/img.jpg'} alt="description"/>
          <img src={process.env.PUBLIC_URL+'/images/images (4).jpg'} alt="description"/>
          <img src={process.env.PUBLIC_URL+'/images/images (2).jpg'} alt="description"/>
        </div>
      </GalleryCardssection>
      
    </GalleryMainDisplay>
  )
}

export default Gallery
