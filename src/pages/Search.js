import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Title from "../components/ui/title"
import Text from "../components/ui/subtitle"

import { searchRequest } from "../services/search"

import {
  searchStyles,
} from "../components/designSystem"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSearch() {
    if (!query.trim()) {
      return
    }

    setLoading(true)

    try {
      const data = await searchRequest(query)

      setResults(data)
    } catch (err) {
      console.error(err)
    }

    setLoading(false)
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  function goToItem(item) {
    // Adaptável ao backend

    if (item.type === "client") {
      navigate(`/clients/${item.id}`)
    }

    if (item.type === "order") {
      navigate(`/orders/${item.id}`)
    }
  }

  return (
    <div className={searchStyles.container}>
      <Title
        className="text-3xl font-bold"
        text="Pesquisa"
      />

      <input
        className={searchStyles.input}
        placeholder="
          Buscar cliente,
          ordem ou serviço...
        "
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      {loading && (
        <Text
          className="text-gray-500"
          text="Buscando..."
        />
      )}

      <div className={searchStyles.resultList}>
        {results.map((item) => (
          <div
            key={item.id}
            className={searchStyles.card}
            onClick={() => goToItem(item)}
          >
            <Title
              className={searchStyles.title}
              text={item.title}
            />

            <Text
              className={searchStyles.subtitle}
              text={item.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  )
}