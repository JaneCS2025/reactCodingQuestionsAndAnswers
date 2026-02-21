import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AccordionAnswerObj from './AccordionAnswerObj'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccordionAnswerObj />
  </StrictMode>,
)
