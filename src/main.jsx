import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import GenerateContent from './pages/GenerateContent.jsx'
import Summary from './pages/Summary.jsx'
import ImageStudio from './pages/ImageStudio.jsx'
import MyContent from './pages/MyContent.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/generate-content",
        element: <GenerateContent /> 
      },
      {
        path: "/summarize-text",
        element: <Summary /> 
      },
      {
        path: "/image-studio",
        element: <ImageStudio />
      },
      {
        path: "/my-content",
        element: <MyContent />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
