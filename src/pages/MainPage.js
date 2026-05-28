import {
  ClipboardList,
  Clock3,
  Wrench,
  CheckCircle2,
} from "lucide-react"

import Dashboard from "../components/dashboard"

import {
  pageStyles,
  cardStyles,
} from "../components/designSystem"

export default function MainPage() {
  const cards = [
    {
      title: "Ordens do Dia",
      description: "OS programadas para hoje",
      value: "12",
      badgeText: "3 urgentes",
      hasBadge: true,
      buttonText: "Ver ordens",
      icon: ClipboardList,
      className: cardStyles.container,

      onClick: () => {
        window.location.href =
          "/orders?filter=today"
      },
    },

    {
      title: "Aguardando Aprovação",
      description: "Orçamentos enviados",
      value: "5",
      badgeText: "R$ 18.400 em orçamento",
      hasBadge: true,
      buttonText: "Ver aprovações",
      icon: Clock3,
      className: cardStyles.container,

      onClick: () => {
        window.location.href =
          "/orders?filter=waiting-approval"
      },
    },

    {
      title: "Em Andamento",
      description: "Ordens em execução",
      value: "8",
      badgeText: "4 motores desmontados",
      hasBadge: true,
      buttonText: "Ver andamento",
      icon: Wrench,
      className: cardStyles.container,

      onClick: () => {
        window.location.href =
          "/orders?filter=in-progress"
      },
    },

    {
      title: "Finalizadas",
      description: "OS concluídas",
      value: "18",
      badgeText: "R$ 42.500 faturados",
      hasBadge: true,
      buttonText: "Ver finalizadas",
      icon: CheckCircle2,
      className: cardStyles.container,

      onClick: () => {
        window.location.href =
          "/orders?filter=finished"
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

    {
      id: 5,
      client: "Ricardo Alves",
      vehicle: "Hilux",
      service: "Troca de bronzina",
      status: "Em andamento",
    },
  ]

  return (
    <div className={pageStyles.container}>
      <div className={pageStyles.layout}>
        {/* HEADER */}
        <div>
          <h1 className={pageStyles.headerTitle}>
            Dashboard
          </h1>

          <p className={pageStyles.subtitle}>
            Controle geral da oficina
          </p>
        </div>

        {/* DASHBOARD */}
        <Dashboard
          cards={cards}
          orders={orders}
        />
      </div>
    </div>
  )
}