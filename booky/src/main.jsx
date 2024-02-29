import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerconfig } from './router/router.jsx'
import "./index.css"
import { DrawerProvider } from './context/drawer.context.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DrawerProvider>
        <ChakraProvider>
            <RouterProvider router={routerconfig}/>
        </ChakraProvider>
    </DrawerProvider>
  </React.StrictMode>,
)
