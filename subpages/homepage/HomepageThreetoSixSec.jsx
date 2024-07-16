
import './homepage.scss'
import HoverableBox from '../../components/HoverableBox'




import search1 from '../../src/assets/homepage/search1.png';
import searchhov from '../../src/assets/homepage/seacrchhov.png';
import presentation1 from '../../src/assets/homepage/presentation1.png';
import presentationhov from '../../src/assets/homepage/presentationhov.png';
import signal1 from '../../src/assets/homepage/signal1.png';
import signalhov from '../../src/assets/homepage/signalhov.png';
import file1 from '../../src/assets/homepage/file1.png';
import filehov from '../../src/assets/homepage/filehov.png';

import picture1 from '../../src/assets/homepage/Thane_CPCA.png';
import picture2 from '../../src/assets/homepage/Reaching_Hand.png';
import picture3 from '../../src/assets/homepage/KHUSHII.png';
import picture4 from '../../src/assets/homepage/Setco.png';
import picture5 from '../../src/assets/homepage/noskk.png';
import picture6 from '../../src/assets/homepage/Agragamee.png';



import npo1 from '../../src/assets/homepage/npo1.png';
import npo2 from '../../src/assets/homepage/npo2.png';
import npo3 from '../../src/assets/homepage/npo3.png';

const HomepageThreetoSixSec = () => {
  return (
    <>
        


        <div className="philanthropy">
            <div className="inner">
                <h1>Power your philanthropy</h1>
                <div className="boxes">
                <HoverableBox
                    normalImg={search1}
                    hoverImg={searchhov}
                    title="Identify credible NPO partners"
                    description="Efficiently find organisations that will meet your goals and gain more valuable partnerships with GuideStar India’s Solutions."
                    linkText="LEARN MORE"
                />
                <HoverableBox
                    normalImg={presentation1}
                    hoverImg={presentationhov}
                    title="Support Capacity Building and Due Diligence for NPOs"
                    description="Educate and equip NPOs to build trust and transparency through a comprehensive framework."
                    linkText="LEARN MORE"
                />
                <HoverableBox
                    normalImg={signal1}
                    hoverImg={signalhov}
                    title="Access API solutions for your programmes"
                    description="Power your platforms with GuideStar India’s APIs to support your organisational needs."
                    extra="COMING SOON"
                    linkText="CONTACT US"
                />
                <HoverableBox
                    normalImg={file1}
                    hoverImg={filehov}
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
                        <img src={picture1} alt="" />
                        </div>
                        
                        <h5 style={{color: "#a3bcc7"}}>PLATINUM</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                        <img src={picture2} alt="" />
                        </div>
                        
                        <h5 style={{color: "#a3bcc7"}}>PLATINUM</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                        <img src={picture3} alt="" />
                        </div>
                        
                        <h5 style={{color: "#a3bcc7"}}>PLATINUM</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                        <img src={picture4} alt="" />
                        </div>
                        
                        <h5 style={{ color: "#ffcc28" }}>GOLD</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                        <img src={picture5} alt="" />
                        </div>
                        
                        <h5 style={{ color: "#a05822" }}>BRONZE</h5>
                    </a>
                    <a href='' className="box">
                        <div className="img">
                        <img src={picture6} alt="" />
                        </div>
                        
                        <h5 style={{ color: "#a05822" }}>BRONZE</h5>
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
                        <img src={npo1} alt="" />
                        </div>
                        <h3>Most NPOs are less than 30 years old, mirrors India’s NPO population.(n=12000)</h3>
                    </div>
                    <div className="box">
                        <div className="img">
                        <img src={npo2} alt="" />
                        </div>
                        <h3>52% of NPOs have between 5 to 10 governing body members (n=1200)</h3>
                    </div>
                    <div className="box">
                        <div className="img">
                        <img src={npo3} alt="" />
                        </div>
                        <h3>The average number of full-time staff is 49 (n=4531)</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomepageThreetoSixSec