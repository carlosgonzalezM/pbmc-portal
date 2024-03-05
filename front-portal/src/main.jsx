import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './Contexts/ContextProvider.jsx'
import { EventoProvider } from './Contexts/EventoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <EventoProvider>
        <RouterProvider router={router}/>
      </EventoProvider>
    </ContextProvider>
  </React.StrictMode>,
)
