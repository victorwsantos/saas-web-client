import { useState } from "react"
import { useAuth } from "../context/authContext"

export default function Login() {
  const { login } = useAuth()

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    await login({
      user,
      password,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={user}
        onChange={(e) =>
          setUser(e.target.value)
        }
        placeholder="usuário"
      />

      <input
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        type="password"
        placeholder="senha"
      />

      <button type="submit">
        Entrar
      </button>
    </form>
  )
}