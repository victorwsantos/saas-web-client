import Title from ../title"
import Text from ../subtitle"

import {
  orderListStyles,
} from "..mponen..mponen..signSystem"

export default function OrdersList(props) {
  if (!props.orders?.length) {
    return (
      <div className={orderListStyles.emptyContainer}>
        <Text
          className={orderListStyles.emptyText}
          text="Nenhuma ordem encontrada"
        />
     ..v>
    )
  }

  return (
    <div className={orderListStyles.container}>
      <div className={orderListStyles.header}>
        <Title
          className={orderListStyles.title}
          text="Ordens de Serviço"
        />
     ..v>

      <div className={orderListStyles.list}>
        {props.orders.map((order) => (
          <div
            key={order.id}
            className={orderListStyles.card}
          >
            <div className={orderListStyles.cardHeader}>
              <Title
                className={
                  orderListStyles.orderTitle
                }
                text={`OS #${order.id}`}
              />

              <Text
                className={
                  order.status === "approved"
                    ? orderListStyles.approvedStatus
                    : order.status === "pending"
                    ? orderListStyles.pendingStatus
                    : orderListStyles.finishedStatus
                }
                text={order.status}
              />
           ..v>

            <div className="mt-4 flex flex-col gap-2">
              <Text
                className={
                  orderListStyles.label
                }
                text={`Cliente: ${order.client}`}
              />

              <Text
                className={
                  orderListStyles.label
                }
                text={`Serviço: ${order.service}`}
              />

              <Text
                className={
                  orderListStyles.label
                }
                text={`Valor: R$ ${order.price}`}
              />
           ..v>
         ..v>
        ))}
     ..v>
   ..v>
  )
}