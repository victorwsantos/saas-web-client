import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Title from "..mponen../title"
import Text from "..mponen../subtitle"
import OrdersList from "..mponen..derList"

import {
  getClientById,
} from "..rvic..ients"

import {
  getOrdersByClientId,
} from "..rvic..ders"

export default function ClientDetailsPage() {
  const { id } = useParams()

  const [client, setClient] = useState(null)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    async function load() {
      const clientData =
        await getClientById(id)

      const ordersData =
        await getOrdersByClientId(id)

      setClient(clientData)
      setOrders(ordersData)
    }

    load()
  }, [id])

  if (!client) return <p>Carregando....

  return (
    <div className="p-6">
      <Title
        className="text-3xl font-bold"
        text={client.name}
      />

      <Text
        className="text-gray-500 mt-2"
        text={client.phone}
      />

      <div className="mt-8">
        <OrdersList orders={orders} />
     ..v>
   ..v>
  )
}