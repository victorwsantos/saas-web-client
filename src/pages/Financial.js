import Card from "../components/ui/card"

import {
  dashboardStyles,
} from "../components/designSystem"

export default function Financial() {
  const financialCards = [
  {
    title: "Orçamentos",
    description: "Orçamentos gerados este mês",
    value: "23",
    badge: "+8% este mês",
  },

  {
    title: "Ordens Pagas",
    description: "OS finalizadas e recebidas",
    value: "R$ 42.500",
    badge: "18 concluídas",
  },

  {
    title: "Aguardando Pagamento",
    description: "Valores pendentes de recebimento",
    value: "R$ 8.200",
    badge: "6 ordens pendentes",
  },

  {
    title: "Clientes Pendentes",
    description: "Clientes com pagamentos em aberto",
    value: "4",
    badge: "Cobrança necessária",
  },

  {
    title: "Faturamento Total",
    description: "Receita acumulada no período",
    value: "R$ 78.900",
    badge: "+12% vs mês anterior",
  },

  {
    title: "Custos por OS",
    description: "Peças, insumos e mão de obra",
    value: "R$ 21.300",
    badge: "Custos operacionais",
  },

  {
    title: "Lucro Líquido",
    description: "Resultado após despesas",
    value: "R$ 57.600",
    badge: "Alta performance",
  },
]

  const summaryCards = [
    {
      title: "Total Recebido",
      description: "Valor recebido no período",
      badge: "R$ 78.900",
    },

    {
      title: "Total Gasto",
      description: "Custos operacionais",
      badge: "R$ 21.300",
    },

    {
      title: "Lucro Líquido",
      description: "Resultado final",
      badge: "R$ 57.600",
    },

    {
      title: "Pendências",
      description: "Pagamentos aguardando",
      badge: "R$ 8.200",
    },
  ]

  return (
    <div className={dashboardStyles.container}>
      {/* HEADER */}
      <div>
        <h1 className={dashboardStyles.headerTitle}>
          Financeiro
        </h1>

        <p className="text-gray-500 mt-2">
          Controle financeiro da oficina
        </p>
      </div>

      {/* KPI CARDS */}
      <div className={dashboardStyles.cardsContainer}>
        {financialCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            badge={card.badge}
          />
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-10">
        <h2
          className="
            text-2xl
            font-bold
            text-gray-900
          "
        >
          Resumo Financeiro
        </h2>

        <div
          className="
            mt-6
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >
          {summaryCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              badge={card.badge}
            />
          ))}
        </div>
      </div>
    </div>
  )
}