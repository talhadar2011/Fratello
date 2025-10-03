import { createFileRoute } from '@tanstack/react-router'
import Products from '../components/Products'

export const Route = createFileRoute('/product')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Products/>
}
