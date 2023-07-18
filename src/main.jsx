import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './data/routes'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={<route.element />} />
        ))
      }
    </Routes>
  </BrowserRouter>
)
