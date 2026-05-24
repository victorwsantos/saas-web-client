import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"

import { getOrders } from "../services/orders"

import { orderPageStyles } from "../components/designSystem"

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [statusFilter, setStatusFilter] = useState("all")
  const [sort, setSort] = useState("desc")

  const navigate = useNavigate()

  useEffect(() => {
    async function loadOrders() {
      const data = await getOrders()
      setOrders(data)
    }

    loadOrders()
  }, [])

  const filteredOrders = useMemo(() => {
    let result = [...orders]

    if (statusFilter !== "all") {
      result = result.filter(
        (order) => order.status === statusFilter
      )
    }

    result.sort((a, b) => {
      const firstDate = new Date(a.createdAt)
      const secondDate = new Date(b.createdAt)

      return sort === "desc"
        ? secondDate - firstDate
        : firstDate - secondDate
    })

    return result
  }, [orders, statusFilter, sort])

  return (
    <div className={orderPageStyles.container}>
      <Title
        className={orderPageStyles.headerTitle}
        text="Ordens de Serviço"
      />

      <div className={orderPageStyles.filtersContainer}>
        <select
          className={orderPageStyles.select}
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
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
          className={orderPageStyles.select}
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

      <div className={orderPageStyles.list}>
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className={orderPageStyles.card}
            onClick={() =>
              navigate(`/orders/${order.id}`)
            }
          >
            <Title
              className={orderPageStyles.orderTitle}
              text={`OS #${order.id}`}
            />

            <Text
              className={orderPageStyles.text}
              text={order.service}
            />

            <Text
              className={orderPageStyles.status}
              text={`Status: ${order.status}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}