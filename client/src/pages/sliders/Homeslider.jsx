import React from 'react'
import { Button } from '../../components/Button.styled'
import { CarouselDiv } from '../../styles/Home.styled'

const Homeslider = () => {
  return (
    <>
      <CarouselDiv>
      <div className='Leftdisplayunit'>
       <h1>Building Our</h1>
       <h2>Faith & Love Together</h2>
       <p>Building Our Faith & Love Together embodies the concept of a shared journey in which faith and love are the foundational principles. It reflects a commitment to nurturing and strengthening these core values as a partnership. This journey involves mutual support, trust, and a deep connection, with the aim of building a strong and enduring bond based on faith and love.</p>
       <Button>Get started</Button>
      </div>

      <div className='Rightdisplayunit'>
        <div className='Image'>
           <img src={process.env.PUBLIC_URL+'/images/bible.jpg'} alt="description"/>
        </div>
      </div>
     </CarouselDiv>
    </>
  )
}

export default Homeslider
