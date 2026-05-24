import NavMenu from "../components/navMenu"
import Dashboard from "../components/dashboard"

export default function MainPage() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-100
        flex
      "
    >
      {/* SIDEBAR */}
      <aside
        className="
          w-72
          min-h-screen
          bg-white
          border-r
          border-gray-200
          shadow-sm
        "
      >
        <NavMenu />
      </aside>

      {/* CONTENT */}
      <main
        className="
          flex-1
          overflow-y-auto
          p-6
        "
      >
        <Dashboard />
      </main>
    </div>
  )
}