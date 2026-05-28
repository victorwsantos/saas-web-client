// src/pages/clientDetails.jsx

import {
  useEffect,
  useMemo,
  useState,
} from "react"

import {
  useNavigate,
  useParams,
} from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"

const clientsMock = [
  {
    id: 1,
    name: "João Silva",
    phone: "(21) 99999-9999",
  },

  {
    id: 2,
    name: "Maria Oliveira",
    phone: "(21) 98888-8888",
  },
]

const ordersMock = [
  {
    id: 1001,
    clientId: 1,
    service: "Retificar Cilindro",
    status: "in-progress",
    price: 2500,
    createdAt: "2026-05-25",
  },

  {
    id: 1002,
    clientId: 1,
    service: "Brunir Cilindro",
    status: "finished",
    price: 800,
    createdAt: "2026-05-20",
  },

  {
    id: 1003,
    clientId: 2,
    service: "Montagem de Motor",
    status: "pending",
    price: 4800,
    createdAt: "2026-05-24",
  },
]

export default function ClientDetailsPage() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [client, setClient] =
    useState(null)

  const [orders, setOrders] =
    useState([])

  useEffect(() => {
    const foundClient =
      clientsMock.find(
        (client) =>
          String(client.id) === id
      )

    const clientOrders =
      ordersMock.filter(
        (order) =>
          String(order.clientId) === id
      )

    setClient(foundClient)
    setOrders(clientOrders)
  }, [id])

  function getStatusLabel(status) {
    if (status === "pending") {
      return "Pendente"
    }

    if (status === "in-progress") {
      return "Em andamento"
    }

    if (status === "finished") {
      return "Finalizada"
    }

    return status
  }

  const totalSpent = useMemo(() => {
    return orders.reduce(
      (acc, order) =>
        acc + order.price,
      0
    )
  }, [orders])

  if (!client) {
    return (
      <div className="p-6">
        <Text
          className="text-gray-500"
          text="Carregando..."
        />
      </div>
    )
  }

  return (
    <div
      className="
        max-w-6xl
        mx-auto
        p-6
        flex
        flex-col
        gap-8
      "
    >
      {/* HEADER */}
      <div
        className="
          bg-white
          border
          border-gray-100
          rounded-2xl
          p-6
          shadow-sm
        "
      >
        <Title
          className="
            text-3xl
            font-bold
          "
          text={client.name}
        />

        <Text
          className="
            text-gray-500
            mt-2
          "
          text={client.phone}
        />

        <div
          className="
            mt-6
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
          "
        >
          <div
            className="
              bg-gray-50
              rounded-xl
              p-4
            "
          >
            <Text
              className="
                text-gray-500
              "
              text="Total de OS"
            />

            <Title
              className="
                text-2xl
                font-bold
              "
              text={String(
                orders.length
              )}
            />
          </div>

          <div
            className="
              bg-gray-50
              rounded-xl
              p-4
            "
          >
            <Text
              className="
                text-gray-500
              "
              text="Valor Total"
            />

            <Title
              className="
                text-2xl
                font-bold
              "
              text={`R$ ${totalSpent}`}
            />
          </div>

          <div
            className="
              bg-gray-50
              rounded-xl
              p-4
            "
          >
            <Text
              className="
                text-gray-500
              "
              text="Cliente desde"
            />

            <Title
              className="
                text-2xl
                font-bold
              "
              text="2026"
            />
          </div>
        </div>
      </div>

      {/* ORDERS */}
      <div
        className="
          flex
          flex-col
          gap-4
        "
      >
        <Title
          className="
            text-2xl
            font-bold
          "
          text="Ordens de Serviço"
        />

        {orders.map((order) => (
          <div
            key={order.id}
            className="
              bg-white
              border
              border-gray-100
              rounded-2xl
              p-5
              shadow-sm
              cursor-pointer
              hover:bg-gray-50
              transition
            "
            onClick={() =>
              navigate(
                `/orders/${order.id}`
              )
            }
          >
            <div
              className="
                flex
                items-start
                justify-between
                gap-4
                flex-wrap
              "
            >
              <div>
                <Title
                  className="
                    text-xl
                    font-semibold
                  "
                  text={`OS #${order.id}`}
                />

                <Text
                  className="
                    text-gray-500
                    mt-1
                  "
                  text={order.service}
                />
              </div>

              <div
                className="
                  flex
                  flex-col
                  items-end
                  gap-2
                "
              >
                <div
                  className="
                    bg-blue-50
                    text-blue-700
                    px-3
                    py-1
                    rounded-xl
                    text-sm
                    font-medium
                  "
                >
                  {getStatusLabel(
                    order.status
                  )}
                </div>

                <Title
                  className="
                    text-lg
                    font-bold
                  "
                  text={`R$ ${order.price}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}