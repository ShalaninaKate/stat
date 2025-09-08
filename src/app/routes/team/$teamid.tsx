import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team/$teamid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/team/$teamid"!</div>
}
