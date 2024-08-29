// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateContextProvider } from './Components/Weatherdetail/Context/index.jsx'
// import Weather from './Components/Weatherdetail/Weather.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <StateContextProvider>
     <App/>
  </StateContextProvider>
)
