import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AccordionAnswer from './AccordionAnswer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccordionAnswer />
  </StrictMode>,
)
