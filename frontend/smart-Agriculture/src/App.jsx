
import './App.css'
// import DiseaseRecognition from './Components/DiseaseRecognition';
// import Footer from './Components/Footer';
// import Forum from './Components/Forum';
// import MarketUpdates from './Components/MraketUpdates';
// import Navbar from './Components/Navbar';
import Weather from './Components/Weatherdetail/Weather';
import Animatedgif from './Components/Animatedgif';

function App() {

  return (
    <>
     
      {/* <Navbar/> */}
      <Animatedgif src="loader.gif" alt="loader" />
      <div className="contents">
         <Weather/>
        {/* <MarketUpdates/>
        <DiseaseRecognition/>
        <Forum/>
        <Footer/> */}

      </div>
    </>
  )
}

export default App
