import React from 'react'
import ReactDOM from 'react-dom/client'

// File imports
import { Teams, Events, Contact, Timeline, Projects, NotFound } from './routes'
import App from './App'
import './index.css'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" exact element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Projects />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/:id" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
