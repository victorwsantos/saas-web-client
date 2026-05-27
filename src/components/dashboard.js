import Card from "./ui/card"
import OrderList from "./orderList"

import {
  dashboardStyles,
  pageStyles,
} from "./designSystem"

export default function Dashboard(props) {
  return (
    <div
      className={
        dashboardStyles.layout
      }
    >
      {/* KPI SECTION */}
      <section>
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
              value={card.value}
              hasBadge={card.hasBadge}
              badgeText={card.badgeText}
              buttonText={card.buttonText}
              buttonClassName={
                card.buttonClassName
              }
              onClick={card.onClick}
              icon={card.icon}
              className={card.className}
            />
          ))}
        </div>
      </section>

      <section
        className={
          pageStyles.section
        }
      >
        <div className="mb-6">
          <h2
            className={
              pageStyles.sectionTitle
            }
          >
            Ordens Recentes
          </h2>

          <p
            className={
              pageStyles.subtitle
            }
          >
            Acompanhe o andamento das
            ordens de serviço
          </p>
        </div>

        <OrderList
          orders={props.orders}
        />
      </section>
    </div>
  )
}