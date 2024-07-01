import React, { useState } from 'react'
import './navbar.scss'
import HoverImage from '../HoverImage'

import search from "../../src/assets/search.png"
import downarrow from '../../src/assets/homepage/down-arrow.png'
import crossicon from '../../src/assets/homepage/cross-icon.png'
import logo from "../../src/assets/logo.png"
import logo2 from "../../src/assets/logo2.png"

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

import hamburger from '../../src/assets/hamburger.png'
import {motion , AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navOpen , setNavOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className="inner">

          {/* first section  */}

          <div className="firstsec">
            <div className="left">
              <img src={logo} alt="" />
              <p>.</p>
            </div>
            <div className="right">
              <div className="glance" onClick={()=>setNavOpen(!navOpen)}>
                <p>GuideStar India at a glance</p>
                <img src={!navOpen ? downarrow:crossicon} alt="" />
              </div>
              <div className="inputlayout">
                <div className="input">
                  <input type="text" placeholder='Enter GSN / IT PAN/ Darpan ID/ FCRA No.'/>
                  <button>
                    <img src={search} alt="" />
                  </button>
                </div>
                <h5>NPO/NGO/ Charity Check</h5>
              </div>
            </div>
            
          </div>

          {/* second section  */}

          <AnimatePresence>
            {navOpen && (
              <motion.div
                className="secondsec"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="innersec">
                  <div className="one">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="two">
                    <ul>
                      <li><a href="" >Theory of Change and Impact</a></li>
                      <li><a href="" >People, Partners and Supporters</a></li>
                    </ul>
                  </div>
                  <div className="two">
                    <ul>
                      <li><a href="">How to Discover/ Support NPOs</a></li>
                      <li><a href="">How to Enhance Credibility of your NPO</a></li>
                    </ul>
                  </div>
                  <div className="two">
                    <ul>
                      <li><a href="">Research Reports & Insights</a></li>
                      <li><a href="">Statutory and FCRA Compliance</a></li>
                    </ul>
                  </div>
                  <div className="three">
                    <p>Contact Us</p>
                    <div className="icon">
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
                    </div>
                    <div className="icon">
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* third section  */}

          <div className="thirdsec">
            <div className="innersec">
              <div className="nposcount">
                <h4>12,301</h4>
                <h5>Live NPOs</h5>
              </div>
              <h5>India&apos;s most exhaustive information repository of Not-for-Profit Organization (NPOs/NGOs)</h5>
            </div>
          </div>

          {/* fouth section  */}

          <div className="fourthsec">
            <div className="mobile">
              <div className="mobilelogo">
                <img src={logo} alt="" />
              </div>
              <div className="hamburger">
                <img src={hamburger} alt="" />
              </div>
            </div>
            
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><a href="">Discover/ Support NPOs</a></li>
              <li><a href="">CERTIFIED NPOs LIST</a></li>
              <li><a href="">Update your Npo Profile</a></li>
              <li><a href="">help</a></li>
              <li><a href="">Media</a></li>
              <button>
                <Link to="/login">
                  Sign In / Create Account
                </Link>
              </button>
            </ul>
            <div className='mobilemenu'>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Discover/ Support NPOs</a></li>
                <li><a href="">CERTIFIED NPOs LIST</a></li>
                <li><a href="">Update your Npo Profile</a></li>
                <li><a href="">help</a></li>
                <li><a href="">Media</a></li>
                <button>
                  Sign In / Create Account
                </button>
              </ul>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Navbar