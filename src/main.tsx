import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/styles/reset.css'
import './components/styles/container.css'
import './index.css'
import App from './components/App/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
