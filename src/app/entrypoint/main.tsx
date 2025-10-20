import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import {routerInstance} from '@app/tanstack-router/router-instance'
import "@app/styles/index.scss";
import "virtual:svg-icons-register";




createRoot(document.getElementById('root')!).render(
  <StrictMode>
<RouterProvider router={routerInstance} />
  </StrictMode>,
)
