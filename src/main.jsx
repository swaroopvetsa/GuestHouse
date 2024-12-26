import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/Home/about.jsx'
import Home from './components/Home/home.jsx'
import Living from './components/Home/living'
import Services from './components/Home/services.jsx'
import Map from './components/Home/map.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <About />
    <Living />
    <Services />
    <Map />
  </StrictMode>
)
