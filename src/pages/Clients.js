// src/pages/clients.jsx

import {
  useEffect,
  useMemo,
  useState,
} from "react"

import {
  useNavigate,
} from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"

const clientsMock = [
  {
    id: 1,
    name: "João Silva",
    phone: "(21) 99999-9999",
  },

  {
    id: 2,
    name: "Maria Oliveira",
    phone: "(21) 98888-8888",
  },

  {
    id: 3,
    name: "Carlos Souza",
    phone: "(21) 97777-7777",
  },

  {
    id: 4,
    name: "Fernanda Lima",
    phone: "(21) 96666-6666",
  },
]

export default function ClientsPage() {
  const [clients, setClients] =
    useState([])

  const [query, setQuery] =
    useState("")

  const navigate = useNavigate()

  useEffect(() => {
    setClients(clientsMock)
  }, [])

  const filteredClients = useMemo(() => {
    if (!query.trim()) {
      return clients
    }

    const search =
      query.toLowerCase()

    return clients.filter((client) => {
      return (
        client.name
          .toLowerCase()
          .includes(search) ||
        client.phone.includes(search)
      )
    })
  }, [clients, query])

  return (
    <div
      className="
        max-w-5xl
        mx-auto
        p-6
        flex
        flex-col
        gap-6
      "
    >
      <div>
        <Title
          className="
            text-3xl
            font-bold
          "
          text="Clientes"
        />

        <Text
          className="
            text-gray-500
            mt-2
          "
          text="
            Selecione um cliente
          "
        />
      </div>

      <input
        className="
          w-full
          border
          border-gray-200
          rounded-xl
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        placeholder="
Buscar cliente...
        "
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        {filteredClients.map(
          (client) => (
            <div
              key={client.id}
              className="
                p-5
                bg-white
                border
                border-gray-100
                rounded-2xl
                cursor-pointer
                hover:bg-gray-50
                transition
                shadow-sm
              "
              onClick={() =>
                navigate(
                  `/clients/${client.id}`
                )
              }
            >
              <Title
                className="
                  text-lg
                  font-semibold
                "
                text={client.name}
              />

              <Text
                className="
                  text-gray-500
                  mt-1
                "
                text={client.phone}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}