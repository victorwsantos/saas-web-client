import { getClients } from "..ients"
import { getOrders } from "..ders"

export async function getDashboardData() {
  const [clients, orders] =
    await Promise.all([
      getClients(),
      getOrders(),
    ])

  const approved = orders.filter(
    (o) => o.status === "approved"
  ).length

  const pending = orders.filter(
    (o) => o.status === "pending"
  ).length

  const finished = orders.filter(
    (o) => o.status === "finished"
  ).length

  return {
    cards: [
      {
        key: "clients",
        title: "Clientes",
        value: clients.length,
      },
      {
        key: "approved",
        title: "Aprovadas",
        value: approved,
      },
      {
        key: "pending",
        title: "Aguardando",
        value: pending,
      },
      {
        key: "finished",
        title: "Finalizadas",
        value: finished,
      },
    ],
    orders,
  }
}