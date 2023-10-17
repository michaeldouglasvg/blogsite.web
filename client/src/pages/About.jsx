import React from 'react'
import { AboutAttainmentstyles, AboutGoalstyles, AboutMainDisplay } from '../styles/About.styled'
import { FcIdea, FcRating, FcVoicePresentation } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <AboutMainDisplay>
      <AboutGoalstyles>
        <div className='Cardsection'>
         <h1>Mission</h1>
         <div className='Logoabout'><FcVoicePresentation className='Icons'/></div>
         <p>Please note that the exact location and wording of the logout option might vary slightly based on the specific Microsoft service or application you are using. However, the general steps outlined above should help you sign out of your Microsoft account.</p>
        </div>
        <div className='Cardsection'>
         <h1>Vision</h1>
         <div className='Logoabout'><FcIdea className='Icons'/></div>
         <p>Please note that the exact location and wording of the logout option might vary slightly based on the specific Microsoft service or application you are using. However, the general steps outlined above should help you sign out of your Microsoft account.</p>
        </div>
        <div className='Cardsection'>
         <h1>Ambition</h1>
         <div className='Logoabout'><FcRating className='Icons'/></div>
         <p>Please note that the exact location and wording of the logout option might vary slightly based on the specific Microsoft service or application you are using. However, the general steps outlined above should help you sign out of your Microsoft account.</p>
        </div>
      </AboutGoalstyles>

      <AboutAttainmentstyles>
       <h1>Learn more from us</h1>
       <p>Please note that the exact location and wording of the logout option might vary slightly based on the specific Microsoft service or application you are using. However, the general steps outlined above should help you sign out of your Microsoft account. &nbsp;<Link to="/contacts" className='Linkjoin'>Click here to join us</Link></p>
      </AboutAttainmentstyles>
    </AboutMainDisplay>
  )
}

export default About
