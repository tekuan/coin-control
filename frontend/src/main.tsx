import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import RegisterLaunch from "./pages/RegisterLaunch"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegisterLaunch />
  </StrictMode>,
)
