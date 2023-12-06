import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
// FONTS
import './assets/fonts/DancingScript-VariableFont_wght.ttf'
import './assets/fonts/Bungee-Regular.ttf'
import './assets/fonts/Pacifico-Regular.ttf'
import './assets/fonts/PermanentMarker-Regular.ttf'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'contact', 
        element: <Contact />
      },
      {
        path: 'projects', 
        element: <Projects />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
