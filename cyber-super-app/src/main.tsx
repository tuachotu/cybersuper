import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import type { PersonaId } from './persona'

function resolvePersona(): PersonaId {
  const raw = new URLSearchParams(window.location.search).get('persona');
  if (raw === 'senior') return 'senior';
  return 'kids';
}

const persona = resolvePersona();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App persona={persona} />
  </StrictMode>,
)
