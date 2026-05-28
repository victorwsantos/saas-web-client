import {
  useEffect,
  useState,
} from "react"

import {
  useParams,
} from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"

import {
  orderDetailsStyles,
} from "../components/designSystem"

const ordersMock = [
  {
    id: 1001,
    client: {
      id: 1,
      name: "João Silva",
      phone: "(21) 99999-9999",
    },

    status: "today",

    price: 250,

    engineNumber: "ABC123",

    engine: "AP 1.8",

    vehicleBrand: "Volkswagen",

    vehicleModel: "Gol",

    entryDate: "2026-05-25",

    services: [
      "Retificar Cilindro",
      "Brunir Cilindro",
      "Montagem de Motor",
    ],

    observations:
      "Motor chegou com superaquecimento.",

    requiredParts:
      "Jogo de juntas e pistões",

    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },

  {
    id: 1002,
    client: {
      id: 2,
      name: "Maria Oliveira",
      phone: "(21) 98888-8888",
    },

    status: "pending",

    price: 4800,

    engineNumber: "XYZ999",

    engine: "Fire 1.0",

    vehicleBrand: "Fiat",

    vehicleModel: "Uno",

    entryDate: "2026-05-24",

    services: [
      "Facear Cabeçote",
      "Solda Bloco",
    ],

    observations:
      "Cliente autorizou apenas orçamento.",

    requiredParts:
      "Cabeçote completo",

    images: [
      "https://placehold.co/600x400",
    ],
  },
]

export default function OrderDetailsPage() {
  const { id } = useParams()

  const [order, setOrder] =
    useState(null)

  useEffect(() => {
    async function loadOrder() {
      const foundOrder =
        ordersMock.find(
          (item) =>
            String(item.id) === id
        )

      setOrder(foundOrder)
    }

    loadOrder()
  }, [id])

  function getStatusLabel(status) {
    if (status === "today") {
      return "Ordens do dia"
    }

    if (status === "pending") {
      return "Pendente"
    }

    if (status === "in-progress") {
      return "Em andamento"
    }

    if (status === "finished") {
      return "Finalizada"
    }

    return status
  }

  if (!order) {
    return (
      <div
        className={
          orderDetailsStyles.container
        }
      >
        <Text
          className={
            orderDetailsStyles.text
          }
          text="Carregando..."
        />
      </div>
    )
  }

  return (
    <div
      className="
        max-w-5xl
        mx-auto
        bg-white
        rounded-2xl
        shadow-sm
        border
        border-gray-100
        p-6
        flex
        flex-col
        gap-6
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
          flex-wrap
        "
      >
        <div>
          <Title
            className="
              text-3xl
              font-bold
              text-gray-900
            "
            text={`OS #${order.id}`}
          />

          <Text
            className="
              text-gray-500
              mt-1
            "
            text={`Status: ${getStatusLabel(
              order.status
            )}`}
          />
        </div>

        <div
          className="
            bg-blue-50
            text-blue-700
            px-4
            py-2
            rounded-xl
            font-semibold
          "
        >
          {`R$ ${order.price}`}
        </div>
      </div>

      {/* CLIENTE */}
      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        <Title
          className="
            text-xl
            font-semibold
          "
          text="Cliente"
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={`Nome: ${order.client.name}`}
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={`Telefone: ${order.client.phone}`}
        />
      </div>

      {/* VEÍCULO */}
      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        <Title
          className="
            text-xl
            font-semibold
          "
          text="Motor e Veículo"
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={`Número do motor: ${order.engineNumber}`}
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={`Motor: ${order.engine}`}
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={`Marca: ${order.vehicleBrand}`}
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={`Modelo: ${order.vehicleModel}`}
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={`Entrada: ${order.entryDate}`}
        />
      </div>

      {/* SERVIÇOS */}
      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        <Title
          className="
            text-xl
            font-semibold
          "
          text="Serviços"
        />

        <div
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          {order.services.map(
            (service) => (
              <div
                key={service}
                className="
                  bg-gray-100
                  text-gray-700
                  px-3
                  py-2
                  rounded-xl
                  text-sm
                "
              >
                {service}
              </div>
            )
          )}
        </div>
      </div>

      {/* OBSERVAÇÕES */}
      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        <Title
          className="
            text-xl
            font-semibold
          "
          text="Observações"
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={order.observations}
        />
      </div>

      {/* PEÇAS */}
      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        <Title
          className="
            text-xl
            font-semibold
          "
          text="Peças necessárias"
        />

        <Text
          className={
            orderDetailsStyles.text
          }
          text={order.requiredParts}
        />
      </div>

      {/* IMAGENS */}
      <div
        className="
          flex
          flex-col
          gap-4
        "
      >
        <Title
          className="
            text-xl
            font-semibold
          "
          text="Fotos"
        />

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          "
        >
          {order.images?.map(
            (url, index) => (
              <img
                key={index}
                src={url}
                alt="Serviço"
                className="
                  w-full
                  h-64
                  object-cover
                  rounded-2xl
                  border
                  border-gray-200
                "
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}