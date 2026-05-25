import NavMenu from "../components/navMenu"
import Dashboard from "../components/dashboard"

export default function MainPage() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-100
        flex
        flex-col
        md:flex-row
      "
    >
      {/* SIDEBAR */}
      <aside
        className="
          w-full
          md:w-72
          bg-white
          border-b
          md:border-b-0
          md:border-r
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
          p-4
          md:p-6
        "
      >
        <Dashboard
          cards={[]}
          orders={[]}
        />
      </main>
    </div>
  )
}