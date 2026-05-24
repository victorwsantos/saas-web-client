const API = "/api/auth"

export async function loginRequest({ user, password }) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, password }),
  })

  if (!res.ok) throw new Error("Login failed")

  return res.json()
}

export async function meRequest() {
  const token = localStorage.getItem("token")

  const res = await fetch(`${API}/me`, {
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