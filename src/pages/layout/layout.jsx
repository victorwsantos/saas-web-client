import { Outlet } from "react-router-dom"

import NavMenu from "../components/navMenu"

export default function Layout() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >
      <NavMenu />

      <main className="p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  )
}