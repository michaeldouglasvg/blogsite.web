import React from 'react'
import { ConntactSection, ContactMainDisplay } from '../styles/Contacts.styled'
import { BiEnvelope, BiEnvelopeOpen, BiMapPin, BiPhone } from 'react-icons/bi'

const Contacts = () => {

  return (
    <ContactMainDisplay>
      <ConntactSection>
        <div className='Leftsectionlinks'>
          <div className='Singlecontactcard'>
            <div className='Top'>
              <div className='Icon'>
                <BiEnvelope className='ic'/>
              </div>
              <div className='Text'>
                <p>Email through</p>
                <small>info@fic.gmail.com</small>
              </div>
            </div>
            <div className='Bottom'>
              <p><bold>Availability: </bold>&nbsp;24/7</p>
              <p><bold>Status: </bold>&nbsp;Open</p>
            </div>
          </div>
          <div className='Singlecontactcard'>
            <div className='Top'>
              <div className='Icon'>
                <BiPhone className='ic'/>
              </div>
              <div className='Text'>
                <p>Call us</p>
                <small>+2547 001 2345</small>
              </div>
            </div>
            <div className='Bottom'>
              <p><bold>Availability: </bold>&nbsp;24/7</p>
              <p><bold>Status: </bold>&nbsp;Open</p>
            </div>
          </div>
          <div className='Singlecontactcard'>
            <div className='Top'>
              <div className='Icon'>
                <BiEnvelopeOpen className='ic'/>
              </div>
              <div className='Text'>
                <p>Postal address</p>
                <small>P.O. Box 28736-00100, GPO, Nairobi-Kenya</small>
              </div>
            </div>
            <div className='Bottom'>
              <p><bold>Availability: </bold>&nbsp;24/7</p>
              <p><bold>Status: </bold>&nbsp;Open</p>
            </div>
          </div>
          <div className='Singlecontactcard'>
            <div className='Top'>
              <div className='Icon'>
                <BiMapPin className='ic'/>
              </div>
              <div className='Text'>
                <p>Location</p>
                <small>Ngong Road, Near Total</small>
              </div>
            </div>
            <div className='Bottom'>
              <p><bold>Availability: </bold>&nbsp;24/7</p>
              <p><bold>Status: </bold>&nbsp;Open</p>
            </div>
          </div>
        </div>


        <div className='Rightforms'>
          <div className='Forms'>
            <h1>Get intouch</h1>
            <form>
              <div className='Cells'>
                <div className='Formfields'>
                    <span>Full name</span>
                    <input type='text' placeholder='Enter the full name here...'/>
                  </div>
                  <div className='Formfields'>
                    <span>Email</span>
                    <input type='email' placeholder='Use valid email incase of feedback'/>
                  </div>
              </div>

              <div className='Cells'>
                <div className='Formfields'>
                  <span>Phone number</span>
                  <input type='number' placeholder='Enter your valid cell number'/>
                </div>
                <div className='Formfields'>
                  <span>Subject</span>
                  <input type='text' placeholder='Type topic of concern'/>
                </div>
              </div>

             <div className='Cells submit'>
                 <div className='Formfields'>
                  <span>Message</span>
                  <textarea type='text' placeholder='Type your message'/>
                </div>

                <div className='Formfields'>
                  <input type='submit' value="Send message"/>
                </div>
             </div>
            </form>
          </div>
        </div>
      </ConntactSection>
    </ContactMainDisplay>
  )
}

export default Contacts
