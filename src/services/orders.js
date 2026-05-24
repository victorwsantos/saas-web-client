const API =".i/orders"

export async function getOrders() {
  const res = await fetch(API)
  if (!res.ok) throw new Error("Error fetching orders")

  return res.json()
}

export async function getOrderById(id) {
  const res = await fetch(`${APid}`)
  if (!res.ok) throw new Error("Order not found")

  return res.json()
}

export async function getOrdersByClientId(clientId) {
  const res = await fetch(
    `${API}?clientId=${clientId}`
  )

  if (!res.ok) {
    throw new Error("Error fetching client orders")
  }

  return res.json()
}