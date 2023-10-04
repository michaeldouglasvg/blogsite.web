import React from 'react'
import { ContentLeft, ContentRight, HomeMainDisplay } from '../styles/Home.styled'
import { Button } from '../components/Button.styled'
import { useNavigationHook } from '../context/hooks/navigation.hook'

const Home = () => {
  const { download } = useNavigationHook();

  return (
    <HomeMainDisplay>
      <ContentLeft>
        <div className='Greetings'>
            <h1>Hi,&nbsp;<span>I am</span></h1>
        </div>
        <div className='Fullname'>
            <h1>Grace Kavere</h1>
        </div>
        <div className='Title'>
            <h2>Data Entry & Leadership with MS Skills.</h2>
        </div>
        <div className='Textdescription'>
            <p>I'm a detail-oriented data entry specialist with strong business leadership skills. Proficient in Microsoft Office, I analyze data, aid strategic decisions, and ensure efficient data management. I'm a valuable asset for enhancing team productivity and delivering insightful results.</p>
        </div>
        <div className='ButtonsLinks'>
          <Button bg='skyblue' clr='white' onClick={download}>Resume/CV</Button>
          <Button bg='green' clr='white' onClick={download}>Work with me</Button>
          <Button bg='orangered' clr='white' onClick={download}>Certificates</Button>
        </div>
      </ContentLeft>
      
      <ContentRight>
        <div className='Image'>
          <img src={process.env.PUBLIC_URL+'/images/sitelogo3.jpg'} alt="description"/>
        </div>
      </ContentRight>
    </HomeMainDisplay>
  )
}

export default Home
