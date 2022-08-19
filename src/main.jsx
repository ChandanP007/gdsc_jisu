import React from 'react'
import ReactDOM from 'react-dom/client'

// File imports
import { Team , Events, Contact,Timeline,Projects , NotFound} from './routes'
import App from './App'
import './index.css'

import { BrowserRouter,Routes,  Route, } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/team" element={<Team />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<Projects />} />
      <Route path="/:id" element={<NotFound />} />
    </Routes>

  </BrowserRouter>
)
