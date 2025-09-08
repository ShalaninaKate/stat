import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <div>
      <Link to="/">
        Home
      </Link>{' '}
      <Link to="/about">
        about
      </Link>{' '}
            <Link to="/team">
        team
      </Link>{' '}
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })