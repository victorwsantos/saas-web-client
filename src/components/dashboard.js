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
     ..v>

      <OrdersList
        orders={props.orders}
      />
   ..v>
  )
}