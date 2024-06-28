import React from 'react'
import AnimatedCounter from '../../components/AnimatedCounter'

import count1 from "../../src/assets/homepage/count1.png"
import count2 from "../../src/assets/homepage/count2.png"
import count3 from "../../src/assets/homepage/count3.png"
import count4 from "../../src/assets/homepage/count4.png"

const TickIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#C00000', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#4472C4', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M20 6L9 17L4 12"></path>
    </svg>
  );

const Counter = () => {
  return (
    <div className='counter'>
        <div className="inner">
            <h1>Get involved using India’s most exhaustive repository of NPOs</h1>

            <div className="boxes">
                <div className="box">
                  <div className="img">
                    <img src={count1} alt="" />
                  </div>
                  <h5><AnimatedCounter from={0} to={500}/>+</h5>
                   <h3>SUPPORT NPOS VETTED FOR ADVANCED LEVELS</h3>
                   <ul>
                        <li>
                            <span className='tickicon'><TickIcon/></span>
                            <h4>Donate money</h4>
                        </li>
                        <li>
                            <span className='tickicon'><TickIcon/></span>
                            <h4>Volunteer</h4>
                        </li>
                        <li>
                            <span className='tickicon'><TickIcon/></span>
                            <h4>Gift in-kind</h4>
                        </li>
                        <li>
                            <span className='tickicon'><TickIcon/></span>
                            <h4>Purchase products</h4>
                        </li>
                        <li>
                            <span className='tickicon'><TickIcon/></span>
                            <h4>Celebrate occasions</h4>
                        </li>
                    </ul>
                </div>
                <div className="box">
                  <div className="img">
                    <img src={count2} alt="" />
                  </div>                
                  <h5><AnimatedCounter from={0} to={7000}/>+</h5>
                  <h3>ENGAGE WITH NPOS VERIFIED FOR BASIC LEVEL</h3>
                  <ul>
                    <li>
                        <span className='tickicon'><TickIcon/></span>
                        <h4>Volunteer</h4>
                    </li>
                    <li>
                        <span className='tickicon'><TickIcon/></span>
                        <h4>Gift in-kind</h4>
                    </li>
                    <li>
                        <span className='tickicon'><TickIcon/></span>
                        <h4>Purchase products</h4>
                    </li>
                    <li>
                        <span className='tickicon'><TickIcon/></span>
                        <h4>Celebrate occasions</h4>
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <div className="img">
                    <img src={count3} alt="" />
                  </div>                
                  <h5><AnimatedCounter from={0} to={12000}/>+</h5>
                  <h3>DISCOVER NPOS VERIFIED FOR ENTRY LEVEL</h3>
                  <ul>
                    <li>
                        <span className='tickicon'><TickIcon/></span>
                        <h4>Gift in-kind</h4>
                    </li>
                    <li>
                        <span className='tickicon'><TickIcon/></span>
                        <h4>Purchase products</h4>
                    </li>
                    <li>
                        <span className='tickicon'><TickIcon/></span>
                        <h4>Celebrate occasions</h4>
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <div className="img">
                    <img src={count4} alt="" />
                  </div>                
                  <h5><AnimatedCounter from={0} to={200000}/>+</h5>
                  <h3>EXPLORE NPOS FOR YOUR RESEARCH AND OUTREACH</h3>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter