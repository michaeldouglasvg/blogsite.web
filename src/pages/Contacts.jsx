import React from 'react'
import { ContactMainDisplay, LeftContainerContent, RightContainerContent } from '../styles/Contacts.styled'
import { FaEnvelope, FaGlobe, FaMapMarker, FaPhone } from "react-icons/fa"

const Contacts = () => {
    const[enablesend, setEnablesend] = React.useState(false);

  return (
    <ContactMainDisplay>
      <LeftContainerContent>
        <div className='Card'>
         <section>
            <div className='Icons'><FaGlobe size={20}/></div>
            <div className='Descriptions'>
                <p>Website</p>
                <p>https://mgracekr.com</p>
            </div>
         </section>
         <section>
            <div className='Icons'><FaPhone size={20}/></div>
            <div className='Descriptions'>
                <p>Call through</p>
                <p>+2547 121 76534</p>
            </div>
         </section>
         <section>
            <div className='Icons'><FaMapMarker size={20}/></div>
            <div className='Descriptions'>
                <p>Location</p>
                <p>Nairobi, Kenya</p>
            </div>
         </section>
         <section>
            <div className='Icons'><FaEnvelope size={20}/></div>
            <div className='Descriptions'>
                <p>Email through</p>
                <p>gracieskr21@gmail.com</p>
            </div>
         </section>
        </div>
      </LeftContainerContent>
      <RightContainerContent>
        <div className='Formcontainer'>
            <form name="contact" method="POST" data-netlify="true">
                <div className='Formgroup'>
                    <span>Full name</span>
                    <input type="text" name="name" id='name' placeholder='Enter the full name'  required/>
                </div>
                <div className='Formgroup'>
                    <span>Working Email</span>
                    <input type="text" name='emaill' id='email' placeholder='Enter valid email address'  required/>
                </div>
                <div className='Formgroup'>
                    <span>Subject/Title</span>
                    <input type="text" name='subject' id='subject' placeholder='Type your topic of interest'  required/>
                </div>
                <div className='Formgroup'>
                    <span>Message</span>
                    <textarea name='message' id='message' col="5" row="10" placeholder='Type your message here not more than 250word(s). Include full detailed information.'  required/>
                </div>
                <div className='checks'>
                    <input type="checkbox" id="policy" checked={enablesend} onChange={() => setEnablesend(!enablesend)}/>
                    <label for="policy"><p>By clicking submit, the website owner will get the email notification of your message. The system will block next access if false information is provided at first.</p></label>
                </div>
                <div className='Formgroup'>
                <input type="submit" value={enablesend?"Send message":"Agree with Terms and Policy to send message"} style={{background: !enablesend && "orangered"}} disabled={!enablesend}/>
                </div>
            </form>
        </div>
      </RightContainerContent>
    </ContactMainDisplay>
  )
}

export default Contacts
