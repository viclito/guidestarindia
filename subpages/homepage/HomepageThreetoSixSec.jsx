import React from 'react'
import './homepage.scss'
import HoverableBox from '../../components/HoverableBox'

const HomepageThreetoSixSec = () => {
  return (
    <>
        <div className="discover">
            <div className="inner">
                <h1>Discover NPOs across India</h1>
                <div className="boxes">
                    <div className="box">
                        <a href="">
                            <div className="imgbox">
                                <div className="img">
                                    <img src="../../src/assets/homepage/badge.png" alt="" />
                                </div>
                            </div>
                            <h3>SEARCH BY CERTIFICATION LEVEL</h3>
                            <h4>Identify NPOs with stellar credibility and transparency</h4>
                        </a>
                    </div>
                    <div className="box">
                        <a href="">
                            <div className="imgbox">
                                <div className="img">
                                    <img src="../../src/assets/homepage/location.png" alt="" />
                                </div>
                            </div>
                            <h3>SEARCH BY GEOGRAPHY</h3>
                            <h4>Locate NPOs active in every state and district across India</h4>
                        </a>
                    </div>
                    <div className="box">
                        <a href="">
                            <div className="imgbox">
                                <div className="img">
                                    <img src="../../src/assets/homepage/social-justice.png" alt="" />
                                </div>
                            </div>
                            <h3>SEARCH BY CAUSE</h3>
                            <h4>Find NPOs for every cause and community you care about</h4>
                        </a>
                    </div>
                    <div className="box">
                        <a href="">
                            <div className="imgbox">
                                <div className="img">
                                    <img src="../../src/assets/homepage/rupee (1).png" alt="" />
                                </div>
                            </div>
                            <h3>SEARCH BY FINANCIALS</h3>
                            <h4>Explore NPOs based on their size, tax benefits, and FCRA eligibility</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <div className="philanthropy">
            <div className="inner">
                <h1>Power your philanthropy</h1>
                <div className="boxes">
                <HoverableBox
                    normalImg="../../src/assets/homepage/search1.png"
                    hoverImg="../../src/assets/homepage/seacrchhov.png"
                    title="Identify credible NPO partners"
                    description="Efficiently find organisations that will meet your goals and gain more valuable partnerships with GuideStar India’s Solutions."
                    linkText="LEARN MORE"
                />
                <HoverableBox
                    normalImg="../../src/assets/homepage/presentation1.png"
                    hoverImg="../../src/assets/homepage/presentationhov.png"
                    title="Support Capacity Building and Due Diligence for NPOs"
                    description="Educate and equip NPOs to build trust and transparency through a comprehensive framework."
                    linkText="LEARN MORE"
                />
                <HoverableBox
                    normalImg="../../src/assets/homepage/signal1.png"
                    hoverImg="../../src/assets/homepage/signalhov.png"
                    title="Access API solutions for your programmes"
                    description="Power your platforms with GuideStar India’s APIs to support your organisational needs."
                    extra="COMING SOON"
                    linkText="CONTACT US"
                />
                <HoverableBox
                    normalImg="../../src/assets/homepage/file1.png"
                    hoverImg="../../src/assets/homepage/filehov.png"
                    title="Attract donors with your NPO profile"
                    description="Claim and update your organisation’s NPO/NGO profile. Earn a Seal of Transparency to give donors the information and confidence they need to support you. (Good news: No cost for Basic Level.)"
                    linkText="UPDATE NOW"
                />
                    
                </div>
            </div>
        </div>











        <div className="certifiednpos">
            <div className="inner">
                <h1>Meet our recently certified NPOs</h1>
                <div className="boxes">
                    <a href='' className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/Picture1.png" alt="" />
                        </div>
                        <img className='secondimg' src="../../src/assets/homepage/platinum.png" alt="" />
                        <h5>Platinum</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/Picture2.png" alt="" />
                        </div>
                        <img className='secondimg' src="../../src/assets/homepage/gold.png" alt="" />
                        <h5 style={{color:"#fec74e"}}>Gold</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/Picture3.png" alt="" />
                        </div>
                        <img className='secondimg' src="../../src/assets/homepage/gold.png" alt="" />
                        <h5 style={{color:"#fec74e"}}>Gold</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/Picture4.png" alt="" />
                        </div>
                        <img className='secondimg' src="../../src/assets/homepage/platinum.png" alt="" />
                        <h5>Platinum</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/Picture5.png" alt="" />
                        </div>
                        <img className='secondimg' src="../../src/assets/homepage/gold.png" alt="" />
                        <h5 style={{color:"#fec74e"}}>Gold</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/Picture1.png" alt="" />
                        </div>
                        <img className='secondimg' src="../../src/assets/homepage/gold.png" alt="" />
                        <h5 style={{color:"#fec74e"}}>Gold</h5>
                    </a>
                </div>
            </div>
        </div>



        <div className="nposector">
            <div className="inner">
                <h1>Learn about the NPO Sector in India</h1>
                <div className="boxes">
                    <div className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/npo1.png" alt="" />
                        </div>
                        <h3>Most NPOs are less than 30 years old, mirrors India’s NPO population.(n=12000)</h3>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/npo2.png" alt="" />
                        </div>
                        <h3>52% of NPOs have between 5 to 10 governing body members (n=1200)</h3>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="../../src/assets/homepage/npo3.png" alt="" />
                        </div>
                        <h3>The average number of full-time staff is 48.78 (n=4531)</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomepageThreetoSixSec