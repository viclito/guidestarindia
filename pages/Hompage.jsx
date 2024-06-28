
import Layout from '../components/Layout'
import Counter from '../subpages/homepage/Counter'
import HomepageEighttoElevenSec from '../subpages/homepage/HomepageEighttoElevenSec'
import HomepageThreetoSixSec from '../subpages/homepage/HomepageThreetoSixSec'
import Landingpage from '../subpages/homepage/Landingpage'
import Medals from '../subpages/homepage/Medals'


const Hompage = () => {
  return (
    <Layout>
      <div className="homepage">
        <Landingpage/>
        <Medals/>
        <Counter/>
        <HomepageThreetoSixSec/>
        <HomepageEighttoElevenSec/>
      </div>
    </Layout>
  )
}

export default Hompage