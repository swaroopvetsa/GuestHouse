import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
// import Home from './components/Navbar/home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar />
    {/* <Home /> */}
  </StrictMode>
)
