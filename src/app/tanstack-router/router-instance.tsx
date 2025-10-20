import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../../routeTree.gen'

const basepath = import.meta.env.BASE_URL;

export const routerInstance = createRouter({ routeTree, basepath })
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof routerInstance
  }
}
