import { StrictMode } from 'react'
import './index.css'
import routesLink from './routesLink.jsx';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routesLink} />
  </StrictMode>,
)
