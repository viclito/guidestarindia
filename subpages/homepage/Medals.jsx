import React from 'react'
import './homepage.scss'

const Medals = () => {
  return (
    <>
      <div className='medal'>
          <div className="inner">
              <h1>Give with confidence to NPOs with our Trust & Transparency Seals</h1>
              <div className="boxes">
                <div className="box">
                  <div className="img">
                    <img src="../../src/assets/homepage/platinum.png" alt="" />
                  </div>
                  <h3>Platinum</h3>
                  <h4>Based on GuideStar India’s seven pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h4>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="../../src/assets/homepage/gold.png" alt="" />
                  </div>                
                  <h3>Gold</h3>
                  <h4>Based on GuideStar India’s seven pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h4>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="../../src/assets/homepage/silver.png" alt="" />
                  </div>                
                  <h3>Silver</h3>
                  <h4>Based on GuideStar India’s seven pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection</h4>
                </div>
                <div className="box">
                  <div className="img">
                    <img src="../../src/assets/homepage/bronze.png" alt="" />
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