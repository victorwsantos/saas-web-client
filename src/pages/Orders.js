import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

import Title from "..mponen../title"
import Text from "..mponen../subtitle"
import { getOrders } from "..rvic..ders"
import { orderPageStyles } from "..mponen..mponen..signSystem"

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [statusFilter, setStatusFilter] = useState("all")
  const [sort, setSort] = useState("desc")

  const navigate = useNavigate()

  useEffect(() => {
    async function load() {
      const data = await getOrders()
      setOrders(data)
    }

    load()
  }, [])

  const filteredOrders = useMemo(() => {
    let result = [...orders]

    if (statusFilter !== "all") {
      result = result.filter(
        (o) => o.status === statusFilter
      )
    }

    result.sort((a, b) => {
      const aDate = new Date(a.createdAt)
      const bDate = new Date(b.createdAt)

      return sort === "desc"
        ? bDate - aDate
        : aDate - bDate
    })

    return result
  }, [orders, statusFilter, sort])

  return (
    <div className={orderPageStyles.container}>
      <Title
        className={orderPageStyles.headerTitle}
        text="Ordens de Serviço"
      />

     ..FILTERS */}
      <div className={orderPageStyles.filtersContainer}>
        <select
          className={orderPageStyles.select}
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="all">Toda..tion>
          <option value="approved">Aprovada..tion>
          <option value="pending">Pendente..tion>
          <option value="finished">Finalizada..tion>
       ..lect>

        <select
          className={orderPageStyles.select}
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="desc">Mais recente..tion>
          <option value="asc">Mais antiga..tion>
       ..lect>
     ..v>

     ..LIST */}
      <div className={orderPageStyles.list}>
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className={orderPageStyles.card}
            onClick={() =>
              navigate..de..order.id}`)
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
         ..v>
        ))}
     ..v>
   ..v>
  )
}