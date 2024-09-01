import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'
import DiseaseRecognition from './Components/DiseaseRecognition';
// import Footer from './Components/Footer';
import MarketUpdate from './Components/MarketUpdate';
import Navbar from './Components/Navbar';
import Login from './Components/Login'
import Weather from './Components/Weatherdetail/Weather';
import Animatedgif from './Components/Animatedgif';
import SignUp from './Components/SignUp';
import Home from './Components/Home'
import Seeds from './Components/Seeds'
import EChaupal from './Components/EChaupal';

function App() {

  return (
    // <>
   
     <Router>
      <Navbar />
     {/* <Home/> */}
     {/* <Weather/> */}
      <Animatedgif src="loader.gif" alt="loader" />
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/disease-recognition" element={<DiseaseRecognition />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/EChaupal" element={<EChaupal />} />
        <Route path="/MarketUpdate" element={<MarketUpdate />} />
        {/* <Route path='/footer' emement={<Footer/>}/> */}
      </Routes>
      
    </Router>

  )
}

export default App
