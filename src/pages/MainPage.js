import Card from "./ui/card"
import OrderList from "./orderList"

import {
  dashboardStyles,
} from "./designSystem"

export default function Dashboard(props) {
  return (
    <div className="flex flex-col gap-8">
      {/* CARDS */}
      <div
        className={
          dashboardStyles.cardsContainer
        }
      >
        {props.cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            value={String(card.value)}
            hasBadge={card.hasBadge}
            badgeText={card.badgeText}
            buttonText={card.buttonText}
            onClick={card.onClick}
            icon={card.icon}
            className={card.className}
          />
        ))}
      </div>

      {/* ORDERS */}
      <OrderList
        orders={props.orders}
      />
    </div>
  )
}