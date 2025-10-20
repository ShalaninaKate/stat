import { createFileRoute } from '@tanstack/react-router'

import { Login } from '@pages/login'

export const Route = createFileRoute('/_authLayout/login')({
  component: Login,
})

