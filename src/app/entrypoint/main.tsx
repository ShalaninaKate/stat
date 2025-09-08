import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import {routerInstance} from '../tanstack-router/router-instance'
// import { routeTree } from '../../routeTree.gen'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
<RouterProvider router={routerInstance} />
  </StrictMode>,
)
