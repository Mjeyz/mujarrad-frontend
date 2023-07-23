import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './Data/routes'
import './assets/css/main.css'
import { ConceptContextProvider } from './context/ConceptContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ConceptContextProvider>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.element />} />
            ))
          }
        </Routes>
    </ConceptContextProvider>
  </BrowserRouter>
)
