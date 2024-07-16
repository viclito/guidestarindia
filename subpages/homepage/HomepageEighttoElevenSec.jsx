import React from 'react'
import './homepage.scss'

import stories1 from "../../src/assets/homepage/stories1.jpg"
import stories2 from "../../src/assets/homepage/stories2.jpg"
import stories3 from "../../src/assets/homepage/stories3.jpg"

import test1 from "../../src/assets/homepage/test1.png"
import test2 from "../../src/assets/homepage/test2.png"
import test3 from "../../src/assets/homepage/test3.png"

import philanthropy1 from "../../src/assets/homepage/philanthropy1.png"
import philanthropy2 from "../../src/assets/homepage/philanthropy2.png"
import philanthropy3 from "../../src/assets/homepage/Benchmark.png"
import philanthropy4 from "../../src/assets/homepage/techsoup.png"
const HomepageEighttoElevenSec = () => {
  return (
    <>
        <div className="stories">
            <div className="inner">
                <h1>Understand needs and issues from the ground</h1>
                <div className="boxes">
                    <div className="box">
                        <div className="img">
                            <img src={stories1} alt="" />
                        </div>
                        <div className="textbox">
                            <div className="firsttext">
                                <h3>NGOs name</h3>
                                <h4>Samerth Talim Kendra (STK) was initiated in 2007, as a response to demand by communities of Juhapura, Sarkhej and Vejalpur for a centre for intellectually challenged children.</h4>
                            </div>
                            <div className="anchorbox">
                                <h4></h4>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={stories2} alt="" />
                        </div>
                        <div className="textbox">
                            <div className="firsttext">
                                <h3>NGOs name</h3>
                                <h4>ETASHA’s program is designed to assist underprivileged youth who have completed schooling and are being trained to become employable in growth sectors of the economy.</h4>
                            </div>
                            <div className="anchorbox">
                                <h4></h4>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={stories3} alt="" />
                        </div>
                        <div className="textbox">
                            <div className="firsttext">
                                <h3>NGOs name</h3>
                                <h4>Thane CPCA conducted programs inviting students from kindergarten to sensitise them towards their approach to animals and how to take care of them.</h4>
                            </div>
                            
                            <div className="anchorbox">
                                <h4></h4>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>





        <div className="changemakers">
            <div className="inner">
                <h1>Meet the Changemakers</h1>
                <div className="boxes">
                    <div className="box">
                        <div className="img">
                            <img src={stories1} alt="" />
                        </div>
                        <div className="textbox">
                            <div className="firsttext">
                                <h3>Samerth Charitable Trust</h3>
                                <h4>Samerth Talim Kendra (STK) was initiated in 2007, as a response to demand by communities of Juhapura, Sarkhej and Vejalpur for a centre for intellectually challenged children.</h4>
                            </div>
                            <div className="anchorbox">
                                <h4></h4>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={stories2} alt="" />
                        </div>
                        <div className="textbox">
                            <div className="firsttext">
                                <h3>Etasha</h3>
                                <h4>ETASHA’s program is designed to assist underprivileged youth who have completed schooling and are being trained to become employable in growth sectors of the economy.</h4>
                            </div>
                            <div className="anchorbox">
                                <h4></h4>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={stories3} alt="" />
                        </div>
                        <div className="textbox">
                            <div className="firsttext">
                                <h3>Thane CPCA</h3>
                                <h4>Thane CPCA conducted programs inviting students from kindergarten to sensitise them towards their approach to animals and how to take care of them.</h4>
                            </div>
                            
                            <div className="anchorbox">
                                <h4></h4>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


        <div className="testimonial">
            <div className="inner">
                <h1>Know how institutions and individuals are using GuideStar India</h1>
                <h2>Our NPO information, due diligence and insights are the differentiator for strategic philanthropy, organisation development and ecosystem system building</h2>
                <div className="boxes">
                    <div className="box">
                        <div className="textbox">
                            <h4>The entire exercise is exciting. Thank you very much for every point you raised, presented and cautioned everyone is both vital to know and make it part of our everyday practice and process.</h4>
                        </div>
                        <div className="downbox">
                            <div className="img">
                                <img src={test1} alt="" />
                            </div>
                            <div className="innertext">
                                <h3>Akhila Sivadas</h3>
                                <h4>Centre for Advocacy and Research</h4>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="textbox">
                            <h4>Wonderfully executed sessions, very insightful and these have given us a lot to rethink the ways of operation and planning the future. Experiencing the filling of the application for certification and overcoming the challenges. Looking forward to using this to further our cause to reach out to a larger funder base. Waiting to do a storming exercise within our management team to work towards collecting relevant information to fulfil the form requirement.</h4>
                        </div>
                        <div className="downbox">
                            <div className="img">
                                <img src={test2} alt="" />
                            </div>
                            <div className="innertext">
                                <h3>Mini Bhargava</h3>
                                <h4>ETASHA Society</h4>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="textbox">
                            <h4>Today&apos;s session was extremely informative. Even though we have an internal auditor who has put in a lot of checks and balances in our accounting process, this session will really help us in checking if we have missed anything important.</h4>
                        </div>
                        <div className="downbox">
                            <div className="img">
                                <img src={test3} alt="" />
                            </div>
                            <div className="innertext">
                                <h3>Radha Raj</h3>
                                <h4>17000 ft Foundation</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <div className="partners">
            <div className="inner">
                <h1>Our Strategic Partners and Collaborators</h1>
                <div className="boxes">
                    <a href='' className="box">
                        <div className="img">
                            <img src={philanthropy1} alt="" />
                        </div>
                        
                    </a>
                    <a href='' className="box">
                        <div className="img">
                            <img src={philanthropy2} alt="" />
                        </div>
                        
                    </a>
                    
                    <a href='' className="box">
                        <div className="img">
                            <img src={philanthropy3} alt="" />
                        </div>
                        
                    </a>
                    <a href='' className="box">
                        <div className="img">
                            <img src={philanthropy4} alt="" />
                        </div>
                        
                    </a>
                    
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default HomepageEighttoElevenSec