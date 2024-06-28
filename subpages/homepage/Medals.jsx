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
              <div className="boxes">
                <div className="box">
                  <div className="img">
                    <img src={platinum} alt="" />
                  </div>
                  <h3>Platinum</h3>
                  <h4>Based on GuideStar India’s seven pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h4>
                </div>
                <div className="box">
                  <div className="img">
                    <img src={gold} alt="" />
                  </div>                
                  <h3>Gold</h3>
                  <h4>Based on GuideStar India’s seven pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h4>
                </div>
                <div className="box">
                  <div className="img">
                    <img src={silver} alt="" />
                  </div>                
                  <h3>Silver</h3>
                  <h4>Based on GuideStar India’s seven pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h4>
                </div>
                <div className="box">
                  <div className="img">
                    <img src={bronze} alt="" />
                  </div>                
                  <h3>Bronze</h3>
                  <h4>Based on GuideStar India’s seven pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h4>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Medals