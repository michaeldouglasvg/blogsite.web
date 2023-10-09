import React from 'react'
import { GalleryHeaderBtns, GalleryMainDisplay, ImageContainer } from '../styles/Gallery.styled'

const Gallery = () => {
  return (
    <GalleryMainDisplay>
      <div className='Gallerypage'>
        <h1>My Gallery</h1>
      </div>
      {/* Buttons for gallery navigations */}
      <GalleryHeaderBtns>
        <button>All</button>
        <button>Friends</button>
        <button>Hicking</button>
        <button>Works</button>
      </GalleryHeaderBtns>
      <ImageContainer>
        <div className='Imagecontainer'>
        <img src={process.env.PUBLIC_URL+'/images/sitelogo3.jpg'} alt="description"/>
        </div>
      </ImageContainer>
    </GalleryMainDisplay>
  )
}

export default Gallery
