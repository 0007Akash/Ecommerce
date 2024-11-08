
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import EcomContextProvider from './context/EcomContext.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <EcomContextProvider>
      <App />
    </EcomContextProvider>
  </BrowserRouter>


)
