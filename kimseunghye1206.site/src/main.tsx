import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className="bg-[#008080] min-h-screen p-10 font-mono flex gap-10 items-start">
      <App />
    </div>
  </StrictMode>,
)
