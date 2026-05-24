import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"
import { getClients } from "../services/clients"

export default function ClientsPage() {
  const [clients, setClients] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function load() {
      const data = await getClients()
      setClients(data)
    }

    load()
  }, [])

  return (
    <div className="p-6">
      <Title
        className="text-3xl font-bold"
        text="Clientes"
      />

      <Text
        className="text-gray-500 mt-2"
        text="Selecione um cliente"
      />

      <div className="mt-6 flex flex-col gap-3">
        {clients.map((client) => (
          <div
            key={client.id}
            className="
              p-4
              bg-white
              border
              rounded-xl
              cursor-pointer
              hover:bg-gray-50
            "
            onClick={() =>
              navigate(`/clients/${client.id}`)
            }
          >
            <Title
              className="text-lg font-semibold"
              text={client.name}
            />

            <Text
              className="text-gray-500"
              text={client.phone}
            />
          </div>
        ))}
      </div>
    </div>
  )
}