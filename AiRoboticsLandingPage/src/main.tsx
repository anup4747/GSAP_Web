import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AiRoboticsLanding from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiRoboticsLanding />
  </StrictMode>,
)
