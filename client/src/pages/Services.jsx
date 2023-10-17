import React from 'react'
import { ServicesMainDisplay, ServicesCardssection, SingleServiceCard } from '../styles/Services.styled'
import { Link } from 'react-router-dom'
import { BiArrowToRight } from 'react-icons/bi'

const Services = () => {
  return (
    <ServicesMainDisplay>
      <ServicesCardssection>
       <SingleServiceCard>
        <div className='Image'>
           <img src={process.env.PUBLIC_URL+'/images/bible.jpg'} alt="description"/>
        </div>
        <div className='Texts'>
          <p>Building Our Faith & Love Together embodies the concept of a shared journey in which faith and love are the foundational principles. It reflects a commitment to nurturing and </p>
          <Link to="/contacts" className='singlelink'>I need this service <BiArrowToRight /></Link>
        </div>
       </SingleServiceCard>
       <SingleServiceCard>
        <div className='Image'>
           <img src={process.env.PUBLIC_URL+'/images/bible.jpg'} alt="description"/>
        </div>
        <div className='Texts'>
          <p>Building Our Faith & Love Together embodies the concept of a shared journey in which faith and love are the foundational principles. It reflects a commitment to nurturing and </p>
          <Link to="/contacts" className='singlelink'>I need this service <BiArrowToRight /></Link>
        </div>
       </SingleServiceCard>
       <SingleServiceCard>
        <div className='Image'>
           <img src={process.env.PUBLIC_URL+'/images/bible.jpg'} alt="description"/>
        </div>
        <div className='Texts'>
          <p>Building Our Faith & Love Together embodies the concept of a shared journey in which faith and love are the foundational principles. It reflects a commitment to nurturing and </p>
          <Link to="/contacts" className='singlelink'>I need this service <BiArrowToRight /></Link>
        </div>
       </SingleServiceCard>
       <SingleServiceCard>
        <div className='Image'>
           <img src={process.env.PUBLIC_URL+'/images/bible.jpg'} alt="description"/>
        </div>
        <div className='Texts'>
          <p>Building Our Faith & Love Together embodies the concept of a shared journey in which faith and love are the foundational principles. It reflects a commitment to nurturing and </p>
          <Link to="/contacts" className='singlelink'>I need this service <BiArrowToRight /></Link>
        </div>
       </SingleServiceCard>
       <SingleServiceCard>
        <div className='Image'>
           <img src={process.env.PUBLIC_URL+'/images/bible.jpg'} alt="description"/>
        </div>
        <div className='Texts'>
          <p>Building Our Faith & Love Together embodies the concept of a shared journey in which faith and love are the foundational principles. It reflects a commitment to nurturing and </p>
          <Link to="/contacts" className='singlelink'>I need this service <BiArrowToRight /></Link>
        </div>
       </SingleServiceCard>
      </ServicesCardssection>
    </ServicesMainDisplay>
  )
}

export default Services
