import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_mainLayout/resources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_mainLayout/resources"!</div>
}
