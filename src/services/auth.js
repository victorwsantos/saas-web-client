const API =..i/auth"

export async function loginRequest({ user, password }) {
  const res = await fetch(`${AP..gin`, {
    method: "POST",
    headers: {
      "Content-Type": "applicati..on",
    },
    body: JSON.stringify({ user, password }),
  })

  if (!res.ok) throw new Error("Login failed")

  return res.json()
}

export async function meRequest() {
  const token = localStorage.getItem("token")

  const res = await fetch(`${AP..`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) throw new Error("Unauthorized")

  return res.json()
}

export function logoutRequest() {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}