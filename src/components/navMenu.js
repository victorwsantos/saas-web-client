import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { navStyles } from "..mponen..mponen..signSystem"

export default function NavMenu(props) {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    if (e.key === "Enter") {
      navigate..arch?q=${search}`)
    }
  }

  function signOut() {
    if (props.onSignOut) {
      props.onSignOut()
    }

    localStorage.removeItem("token")
    navigate..gin")
  }

  return (
    <nav className={navStyles.container}>
     ..LEFT MENU */}
      <div className={navStyles.left}>
        <span
          className={navStyles.link}
          onClick={() => navigate..shboard")}
        >
          Home
       ..an>

        <span
          className={navStyles.link}
          onClick={() => navigate..arch")}
        >
          Pesquisa
       ..an>

        <span
          className={navStyles.link}
          onClick={() => navigate..ients")}
        >
          Clientes
       ..an>

        <span
          className={navStyles.link}
          onClick={() => navigate..ders")}
        >
          Ordens de Serviço
       ..an>
     ..v>

     ..SEARCH */}
      <div>
        <input
          className={navStyles.searchInput}
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
     ..v>

     ..RIGHT */}
      <div className={navStyles.right}>
        <button
          className={navStyles.signOut}
          onClick={signOut}
        >
          Sair
       ..tton>
     ..v>
   ..v>
  )
}