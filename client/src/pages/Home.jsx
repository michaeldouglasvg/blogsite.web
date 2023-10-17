import React from 'react'
import { HomeMainDisplay } from '../styles/Home.styled'
import Homeslider from './sliders/Homeslider'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Home = () => {

  return (
    <HomeMainDisplay>
      <Splide>
        <SplideSlide>
           <Homeslider />
        </SplideSlide>
        <SplideSlide>
          <Homeslider />
        </SplideSlide>
        <SplideSlide>
          <Homeslider />
        </SplideSlide>
        <SplideSlide>
          <Homeslider />
        </SplideSlide>
      </Splide>
    </HomeMainDisplay>
  )
}

export default Home
