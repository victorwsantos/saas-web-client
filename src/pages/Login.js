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
    <form
      onSubmit={handleSubmit}
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
      "
    >
      <div
        className="
          bg-white
          p-8
          rounded-2xl
          shadow-md
          w-full
          max-w-md
          flex
          flex-col
          gap-4
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-center
          "
        >
          Login
        </h1>

        <input
          value={user}
          onChange={(e) =>
            setUser(e.target.value)
          }
          placeholder="Usuário"
          className="
            border
            rounded-lg
            p-3
            outline-none
          "
        />

        <input
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          type="password"
          placeholder="Senha"
          className="
            border
            rounded-lg
            p-3
            outline-none
          "
        />

        <button
          type="submit"
          className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            rounded-lg
            p-3
            transition
          "
        >
          Entrar
        </button>
      </div>
    </form>
  )
}