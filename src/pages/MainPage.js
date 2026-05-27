import Dashboard from "../components/dashboard"

export default function MainPage() {
  const cards = [
    {
      title: "Ordens do Dia",
      value: 12,
      description: "OS programadas para hoje",
      buttonText: "Ver ordens",
      onClick: () => {
        window.location.href = "/search?filter=today"
      },
    },

    {
      title: "Aguardando Aprovação",
      value: 5,
      description: "Orçamentos enviados",
      buttonText: "Ver aprovações",
      onClick: () => {
        window.location.href =
          "/search?filter=waiting-approval"
      },
    },

    {
      title: "Em Andamento",
      value: 8,
      description: "Ordens em execução",
      buttonText: "Ver andamento",
      onClick: () => {
        window.location.href =
          "/search?filter=in-progress"
      },
    },

    {
      title: "Finalizadas",
      value: 18,
      description: "OS concluídas",
      buttonText: "Ver finalizadas",
      onClick: () => {
        window.location.href =
          "/search?filter=finished"
      },
    },
  ]

  const orders = [
    {
      id: 1,
      client: "João Silva",
      vehicle: "Honda Civic",
      service: "Retífica completa",
      status: "Em andamento",
    },

    {
      id: 2,
      client: "Maria Oliveira",
      vehicle: "Toyota Corolla",
      service: "Troca de junta",
      status: "Aguardando aprovação",
    },

    {
      id: 3,
      client: "Carlos Souza",
      vehicle: "Gol 1.6",
      service: "Revisão do cabeçote",
      status: "Finalizada",
    },

    {
      id: 4,
      client: "Fernanda Lima",
      vehicle: "Onix Turbo",
      service: "Troca de pistão",
      status: "Ordens do dia",
    },
  ]

  return (
    <Dashboard
      cards={cards}
      orders={orders}
    />
  )
}