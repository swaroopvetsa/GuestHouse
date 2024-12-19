import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/Home/about.jsx'
import Home from './components/Home/home.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
    <About />
    
  </StrictMode>
)
