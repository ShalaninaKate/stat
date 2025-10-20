import { Home } from '@pages/Home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_mainLayout/')({
  component: Home,
})

