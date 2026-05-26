import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { navStyles } from "./designSystem"

export default function NavMenu(props) {
  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  function handleSearch(e) {
    if (e.key === "Enter") {
      navigate(`/search?q=${search}`)
    }
  }

  function signOut() {
    if (props.onSignOut) {
      props.onSignOut()
    }

    localStorage.removeItem("token")

    navigate("/login")
  }

  return (
    <nav className={navStyles.container}>
      <div className={navStyles.left}>
        <span
          className={navStyles.link}
          onClick={() => navigate("/")}
        >
          Home
        </span>

        <span
          className={navStyles.link}
          onClick={() => navigate("/search")}
        >
          Pesquisa
        </span>

        <span
          className={navStyles.link}
          onClick={() => navigate("/clients")}
        >
          Clientes
        </span>

        <span
          className={navStyles.link}
          onClick={() => navigate("/orders")}
        >
          Ordens de Serviço
        </span>
        <span
          className={navStyles.link}
          onClick={() => navigate("/orders/create")}
        >
          Criar nova OS
        </span>
        <button
          className={navStyles.signOut}
          onClick={signOut}>
          Sair
        </button>

      </div>
    </nav>
  )
}