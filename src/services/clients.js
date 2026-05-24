const API ="..i/clients"

export async function getClients() {
  const res = await fetch(API)
    if (!res.ok) throw new Error("Error fetching clients")

      return res.json()
      }

      export async function getClientById(id) {
        const res = await fetch(`${APid}`)
          if (!res.ok) throw new Error("Client not found")

            return res.json()
            }