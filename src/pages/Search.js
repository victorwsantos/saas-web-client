import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Title from "..mponen../title"
import Text from "..mponen../subtitle"
import { searchRequest } from "..rvic..arch"

import {
  searchStyles,
} from "..mponen..mponen..signSystem"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSearch() {
    if (!query) return

    setLoading(true)

    try {
      const data =
        await searchRequest(query)

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
  ..adaptável ao seu backend
    if (item.type === "client") {
      navigate..ien..item.id}`)
    }

    if (item.type === "order") {
      navigate..de..item.id}`)
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
        placeholder="Buscar cliente, ordem ou serviço..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      {loading && (
        <Text text="Buscando..." />
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
         ..v>
        ))}
     ..v>
   ..v>
  )
}