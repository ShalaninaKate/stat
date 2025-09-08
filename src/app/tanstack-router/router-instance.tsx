import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../../routeTree.gen'

export const routerInstance = createRouter({ routeTree })
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof routerInstance
  }
}
