import formerimg from '../assets/formerimg.jpg'
import './Styles/Home.css'
import identifyplant from'../assets/identifyplant.jpg'
import worldconnected from '../assets/worldconnected.png'
import indiamap from '../assets/indiamap.avif'
const Home = () => {
  return (
    <>
    <div>
      <div className='img'>
      <img className="farmer"src={formerimg} alt="" />
      </div>
      <div className='text'>
        <h1>Empower Your Farming with AgroLoop</h1>
        <p>Get Expert Crop Advice, Real-Time Weather Updates, Market Insights, Diseases Detection, and Connect with Fellow Farmers-All in One Platform</p>
        <button>Get Started</button>
      </div>
    </div>
     <div className='identify-crop'>
      <div className='crop-left'>
        <img className='plant' src={identifyplant} alt="" />
      </div>
      <div  className='crop-right'>
        <h2>Quickly Identify and Manage Crop Diseases with Precision.</h2>
        <p>Detect and Diagnose Crop Diseases Early, Ensuring Timely Intervention and Optimal Health for Your crops.</p>
      </div>
     </div>
     <div className='currency'>
      <div className='map-left'>
        <h1>Check the Market updates of Crops in all around India
        </h1>
      </div>
      <div className='map-right'> 
        <img src={indiamap} alt="" />
      </div>
     </div>
     <div className='world-connection'>
      <h1>Knowledge-sharing connected <br />around the world.
      </h1>
      <div className='map-container'>
      <img src={worldconnected} alt="" />
      </div>
     </div>
     <div className='comment'>
      <h1>What people say about us</h1>
      <div className='comment-container'>
        <div className='say-people'>
          <p>AgroLoop’s real-time weather updates helped me avoid a potential disaster during the monsoon. The accurate forecasts allowed me to plan my irrigation better and protect my crops.</p>
          <hr />
          <p  className='name'>-ravi kumar</p>
        </div>
        
        <div className="say-people"><p>
        Thanks to AgroLoop’s disease detection feature, I was able to quickly identify and treat a fungal infection in my tomatoes. The precise recommendations saved my entire harvest.</p>
        <hr />
        <p  className='name'>-Sunita Verma</p>
        </div>
        <div className="say-people"><p>
        The market insights provided by AgroLoop were a game-changer for me. I sold my crops at peak prices and increased my profits significantly. The platform truly helped me make informed decisions.</p>
        <hr />
        <p className='name'>-Aarti Patel</p>
        </div>
        <div className="say-people"><p>
        AgroLoop’s crop advice tailored to my soil type was invaluable. It guided me on the best crops to plant and improved my yield considerably. I’m now growing healthier and more productive crops.</p>
        <hr /><p  className='name'>
          -Suresh Yadav
        </p>
        </div>
        <div className="say-people"><p>Connecting with other farmers through AgroLoop’s community forum has been incredibly helpful. I’ve learned new farming techniques and shared valuable experiences that have improved my farming practices.</p>
        <hr />
        <p  className='name'>Meera Sharma</p>
        </div>
        <div className="say-people"><p>
        AgroLoop’s pest identification tool made it easy for me to recognize and address pest problems early. The targeted solutions helped me protect my crops and ensured a better harvest.</p>
        <hr />
        <p  className='name'>-Rajesh Singh</p>
        </div>
      </div>
     </div>
    </>
  )
}

export default Home
