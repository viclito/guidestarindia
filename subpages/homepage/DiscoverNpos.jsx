import './homepage.scss'

import badge from "../../src/assets/homepage/badge.png"
import location from "../../src/assets/homepage/location.png"
import socialJustice from "../../src/assets/homepage/social-justice.png"
import rupee from "../../src/assets/homepage/rupee (1).png"

const DiscoverNpos = () => {
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
                                    <img src={badge} alt="" />
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
                                    <img src={location} alt="" />
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
                                    <img src={socialJustice} alt="" />
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
                                    <img src={rupee} alt="" />
                                </div>
                            </div>
                            <h3>SEARCH BY FINANCIALS</h3>
                            <h4>Explore NPOs based on their size, tax benefits, and FCRA eligibility</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DiscoverNpos