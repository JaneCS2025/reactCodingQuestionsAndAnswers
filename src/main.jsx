import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactFormAnswer from './ContactFormAnswer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactFormAnswer />
  </StrictMode>,
)
