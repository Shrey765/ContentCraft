import { useState} from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from './Layout.jsx'
import './App.css'
import GenerateContent from './pages/GenerateContent.jsx'
import Summary from './pages/Summary.jsx'
import ImageStudio from './pages/ImageStudio.jsx'
import MyContent from './pages/MyContent.jsx'
import { SessionProvider } from './context/sessionContext.js'

function App() {

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

    const [sessions, setSession] = useState([]);
    
    const addSession = (session) => {
      const id = crypto.randomUUID();
      setSession((prev) => [{id: id, ...session}, ...prev]);
    }
    
    const deleteSession = (id) => {
      setSession((prev) => prev.filter((prevSession) => prevSession.id !== id));
    }

  return (
    <SessionProvider value={{sessions, addSession, deleteSession}}>
      <RouterProvider router={router} />
    </SessionProvider>
  )
}

export default App
