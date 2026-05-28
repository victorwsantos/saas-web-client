import {
  useEffect,
  useMemo,
  useState,
} from "react"

import {
  useNavigate,
} from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"

import {
  orderPageStyles,
} from "../components/designSystem"

const ordersMock = [
  {
    id: 1001,
    client: "João Silva",
    service: "Troca de óleo e filtro",
    price: 250,
    status: "approved",
    createdAt: "2026-05-25T10:30:00",
  },
  {
    id: 1002,
    client: "Maria Oliveira",
    service: "Retífica de motor",
    price: 4800,
    status: "pending",
    createdAt: "2026-05-24T15:45:00",
  },
  {
    id: 1003,
    client: "Carlos Souza",
    service: "Alinhamento e balanceamento",
    price: 180,
    status: "finished",
    createdAt: "2026-05-20T08:15:00",
  },
  {
    id: 1004,
    client: "Fernanda Costa",
    service: "Troca de embreagem",
    price: 2200,
    status: "approved",
    createdAt: "2026-05-21T14:20:00",
  },
  {
    id: 1005,
    client: "Ricardo Mendes",
    service: "Revisão completa",
    price: 1350,
    status: "pending",
    createdAt: "2026-05-23T11:10:00",
  },
  {
    id: 1006,
    client: "Juliana Lima",
    service: "Troca de pastilhas de freio",
    price: 420,
    status: "finished",
    createdAt: "2026-05-18T17:00:00",
  },
]

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] =
    useState("all")
  const [sort, setSort] = useState("desc")

  const navigate = useNavigate()

  useEffect(() => {
    setOrders(ordersMock)
  }, [])

  const filteredOrders = useMemo(() => {
    let result = [...orders]

    if (query.trim()) {
      const search = query.toLowerCase()

      result = result.filter((order) => {
        return (
          order.client
            .toLowerCase()
            .includes(search) ||
          order.service
            .toLowerCase()
            .includes(search) ||
          String(order.id).includes(search)
        )
      })
    }

    if (statusFilter !== "all") {
      result = result.filter(
        (order) =>
          order.status === statusFilter
      )
    }

    result.sort((a, b) => {
      const firstDate = new Date(
        a.createdAt
      )

      const secondDate = new Date(
        b.createdAt
      )

      return sort === "desc"
        ? secondDate - firstDate
        : firstDate - secondDate
    })

    return result
  }, [
    orders,
    query,
    statusFilter,
    sort,
  ])

  return (
    <div className={orderPageStyles.container}>
      <Title
        className={
          orderPageStyles.headerTitle
        }
        text="Ordens de Serviço"
      />

      <input
        className={
          orderPageStyles.select
        }
        placeholder="
Buscar cliente,
serviço ou OS...
        "
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <div
        className={
          orderPageStyles.filtersContainer
        }
      >
        <select
          className={
            orderPageStyles.select
          }
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
        >
          <option value="all">
            Todas
          </option>

          <option value="approved">
            Aprovadas
          </option>

          <option value="pending">
            Pendentes
          </option>

          <option value="finished">
            Finalizadas
          </option>
        </select>

        <select
          className={
            orderPageStyles.select
          }
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="desc">
            Mais recentes
          </option>

          <option value="asc">
            Mais antigas
          </option>
        </select>
      </div>

      <div
        className={
          orderPageStyles.list
        }
      >
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className={
              orderPageStyles.card
            }
            onClick={() =>
              navigate(
                `/orders/${order.id}`
              )
            }
          >
            <Title
              className={
                orderPageStyles.orderTitle
              }
              text={`OS #${order.id}`}
            />

            <Text
              className={
                orderPageStyles.text
              }
              text={order.service}
            />

            <Text
              className={
                orderPageStyles.text
              }
              text={order.client}
            />

            <Text
              className={
                orderPageStyles.status
              }
              text={`Status: ${order.status}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}