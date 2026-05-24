const API =".i/search"

export async function searchRequest(query) {
  const res = await fetch(
    `${API}?q=${encodeURIComponent(query)}`
  )

  if (!res.ok) {
    throw new Error("Search failed")
  }

  return res.json()
}