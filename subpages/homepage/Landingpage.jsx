import './homepage.scss'

import search from '../../src/assets/search.png'
import mainimg from '../../src/assets/homepage/Frame 61.png'

const Landingpage = () => {
  return (
    <div className='landing'>
        <div className="inner">
            <div className="left">
                <h1>
                    Look up Not-for-Profit Organisations
                    and access the information you need 
                    to give with confidence!
                </h1>
                <h2>Use GuideStar India to look up not-for-profit organisations and access the most complete data available.</h2>
                <div className="inputlayout">
                    <div className="input">
                        <input type="text" placeholder='Enter organisation name or keyword'/>
                        <button>
                            <img src={search} alt="" />
                        </button>
                    </div>
                    <button className='search'>SEARCH</button>
                    <button className='register'>REGISTER FOR FREE</button>
                    <div className="underline">
                        <a href="">Why register for more free searches?</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={mainimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Landingpage