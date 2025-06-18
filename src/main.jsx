import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/Cart/Cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <BrowserRouter basename='Shopmate'>
    <App />
    </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
