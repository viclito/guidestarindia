import React from 'react'
import './footer.scss'
import HoverImage from '../HoverImage'

import logo from "../../src/assets/logo.png"


import facebook from '../../src/assets/facebook.png';
import facebookBlue from '../../src/assets/facebookblue.png';
import instagram from '../../src/assets/instagram.png';
import instagramblue from '../../src/assets/instagramblue.png';
import linkedin from '../../src/assets/linkedin.png';
import linkedinblue from '../../src/assets/linkedinblue.png';
import whatsapp from '../../src/assets/whatsapp.png';
import whatsappblue from '../../src/assets/whatsappblue.png';
import youtube from '../../src/assets/youtube.png';
import youtubeblue from '../../src/assets/youtubeblue.png';
import chat from '../../src/assets/chat.png';
import chatblue from '../../src/assets/chatblue.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="inner">
        <div className="firstsec">
          <div className="segmants">
            <div className="box">
                <div className="img">
                  <img src={logo} alt="" />
                </div>
                <div className="logos">
                  <HoverImage 
                    defaultSrc={chat}
                    hoverSrc={chatblue}
                    alt="chat"
                    link="https://www.facebook.com"
                  />
                  <HoverImage 
                    defaultSrc={linkedin}
                    hoverSrc={linkedinblue}
                    alt="linkedin"
                    link="https://www.facebook.com"
                  />
                  <HoverImage 
                    defaultSrc={youtube}
                    hoverSrc={youtubeblue}
                    alt="Facebook"
                    link="https://www.facebook.com"
                  />
                  <HoverImage 
                    defaultSrc={facebook}
                    hoverSrc={facebookBlue}
                    alt="Facebook"
                    link="https://www.facebook.com"
                  />
                  <HoverImage 
                    defaultSrc={instagram}
                    hoverSrc={instagramblue}
                    alt="Facebook"
                    link="https://www.facebook.com"
                  />
                  <HoverImage 
                    defaultSrc={whatsapp}
                    hoverSrc={whatsappblue}
                    alt="Facebook"
                    link="https://www.facebook.com"
                  />
                </div>
            </div>

            <div className="box">
              <h3>To Discover/ Support NPOs</h3>
              <ul>
                <li><a href="">Certified NPOs List</a></li>
                <li><a href="">Register/ Update your profile</a></li>
                <li><a href="">Explore, discover, engage and support NPOs</a></li>
                <li><a href="">For Foundations/ CSR/ Platforms/ Government/ Research</a></li>
                <li><a href="">Connect with an NPO</a></li>
                <li><a href="">Invite/ Share</a></li>
              </ul>
            </div>
            <div className="box">
              <h3>For NPOs</h3>
              <ul>
                <li><a href="">Register/ Update your profile</a></li>
                <li><a href="">Apply for Certification</a></li>
                <li><a href="">Access Resources for NPOs</a></li>
                <li><a href="">Join Forums</a></li>
                <li><a href="">Join Training Sessions</a></li>
              </ul>
            </div>
            <div className="box">
              <h3>About Us</h3>
              <ul>
                <li><a href="">Theory of Change and Impact</a></li>
                <li><a href="">People, Partners and Supporters</a></li>
                <li><a href="">How to Discover/ Support NPOs</a></li>
                <li><a href="">How to Enhance Credibility of your NPO</a></li>
                <li><a href="">Research Reports & Insights</a></li>
                <li><a href="">Statutory and FCRA Compliance</a></li>
              </ul>
            </div>
            <div className="box">
              <h3>Other Links</h3>
              <ul>
                <li><a href="">Search</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Media</a></li>
              </ul>
            </div>


          </div>
        </div>


        <div className="secondsec">
          <ul>
            <li><a href=''>PRIVACY POLICY</a></li>
            <li><a href=''>TERMS OF USE</a></li>
            <li><a href=''>DISCLAIMER</a></li>
            <li><a href=''>COPYRIGHT CSIS INDIA</a></li>
            <li><a href=''>SUPPORT GUIDESTAR INDIA</a></li>
            <li><a href=''>WORK WITH US</a></li>
            <li><a href=''>CONTACT US</a></li>
            <li><a href=''>SEND FEEDBACK</a></li>
            <li><a href=''>REPORT AN NPO/ NGO</a></li>
          </ul>
        </div>


        <div className="thirdsec">
          <h6>GuideStar India is a programme of Civil Society Information Services India (CSISI), a public charitable trust registered in India with 80G and FCRA registration. ©2024 CSISI.</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer