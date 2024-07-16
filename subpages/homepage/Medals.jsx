import React from 'react'
import './homepage.scss'

import platinum from "../../src/assets/homepage/platinum.png"
import gold from "../../src/assets/homepage/gold.png"
import silver from "../../src/assets/homepage/silver.png"
import bronze from "../../src/assets/homepage/bronze.png"

const Medals = () => {
  return (
    <>
      <div className='medal'>
          <div className="inner">
              <h1>Give with confidence to NPOs with our Trust & Transparency Seals</h1>
              <h2>Based on GuideStar India’s 7 pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h2>

              <div className="boxes">
                <div className="box">
                  <div className="img">
                    <img src={platinum} alt="" />
                  </div>

                  <h3 style={{color:'#a3bcc7'}}>PLATINUM</h3>
                </div>
                <div className="box">
                  <div className="img">
                    <img src={gold} alt="" />
                  </div>                
                  <h3 style={{color:'#ffcc28'}}>GOLD</h3>
                  
                </div>
                <div className="box">
                  <div className="img">
                    <img src={silver} alt="" />
                  </div>                
                  <h3 style={{color:'#94a0a8'}}>SILVER</h3>
                  
                </div>
                <div className="box">
                  <div className="img">
                    <img src={bronze} alt="" />
                  </div>                
                  <h3 style={{color:'#a05822'}}>BRONZE</h3>
                  
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Medals