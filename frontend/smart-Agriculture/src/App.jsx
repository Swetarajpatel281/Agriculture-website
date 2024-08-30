
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'
import DiseaseRecognition from './Components/DiseaseRecognition';
// import Footer from './Components/Footer';
// import Forum from './Components/Forum';
// import MarketUpdates from './Components/MraketUpdates';
import Navbar from './Components/Navbar';
import Login from './Components/Login'
import Weather from './Components/Weatherdetail/Weather';
import Animatedgif from './Components/Animatedgif';
import SignUp from './Components/SignUp';

function App() {

  return (
    // <>
   
     <Router>
      <Navbar />
      <Animatedgif src="loader.gif" alt="loader" />
      <Routes>
        <Route path="/weather" element={<Weather />} />
        {/* <Route path="/seeds" element={<Seeds />} /> */}
        <Route path="/disease-recognition" element={<DiseaseRecognition />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        {/* <Route path="/forum" element={<Forum />}  */}
      </Routes>
      {/* <Footer/> */}
    </Router>

  )
}

export default App
