import Card from "./ui/card"
import OrderList from "./orderList"

export default function Dashboard(props) {
  return (
    <div>
      <div>
        {props.cards.map(card => (
          <Card
            key={card.title}
            title={card.title}
            description={String(card.value)}
          />
        ))}
     </div>

      <OrderList
        orders={props.orders}
      />
   </div>
  )
}