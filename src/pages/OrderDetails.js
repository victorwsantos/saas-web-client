import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"
import { getOrderById } from "../services/orders"

import {
  orderDetailsStyles,
} from "../../designSystem"

export default function OrderDetailsPage() {
  const { id } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    async function load() {
      const data = await getOrderById(id)
      setOrder(data)
    }

    load()
  }, [id])

  if (!order) {
    return (
      <div className={orderDetailsStyles.container}>
        <Text text="Carregando..." />
      </div>
    )
  }

  return (
    <div className={orderDetailsStyles.container}>
      <Title
        className={orderDetailsStyles.title}
        text={`OS #${order.id}`}
      />

      <Text
        className={orderDetailsStyles.text}
        text={`Status: ${order.status}`}
      />

      <Text
        className={orderDetailsStyles.text}
        text={`Serviço: ${order.service}`}
      />

      <Text
        className={orderDetailsStyles.text}
        text={`Cliente: ${order.client}`}
      />

      <Text
        className={orderDetailsStyles.price}
        text={`Valor: R$ ${order.price}`}
      />

      {/* IMAGES (S3 URLs) */}
      <div className={orderDetailsStyles.imagesGrid}>
        {order.images?.map((url, index) => (
          <img
            key={index}
            src={url}
            className={orderDetailsStyles.image}
            alt="serviço"
          />
        ))}
      </div>
    </div>
  )
}