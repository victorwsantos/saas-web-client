import Card from "../../components/card"

import {
  dashboardStyles,
} from "../../components/designSystem"

export default function Financial() {
  const financialCards = [
    {
      title: "Orçamentos",
      description: "23 orçamentos criados",
      badge: "Este mês",
    },

    {
      title: "Ordens Pagas",
      description: "18 ordens concluídas",
      badge: "R$ 42.500",
    },

    {
      title: "Aguardando Pagamento",
      description: "6 ordens pendentes",
      badge: "R$ 8.200",
    },

    {
      title: "Clientes Pendentes",
      description: "4 clientes com débitos",
      badge: "Cobrança necessária",
    },

    {
      title: "Faturamento Total",
      description: "Receita acumulada",
      badge: "R$ 78.900",
    },

    {
      title: "Custos por OS",
      description: "Peças e mão de obra",
      badge: "R$ 21.300",
    },

    {
      title: "Lucro",
      description: "Resultado líquido",
      badge: "R$ 57.600",
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