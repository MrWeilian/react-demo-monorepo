import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyContextProvider } from '@my/react-bundle-context'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>,
)
