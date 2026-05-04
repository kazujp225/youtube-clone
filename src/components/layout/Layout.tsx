import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export function Layout() {
  const location = useLocation()
  const isWatchPage = location.pathname.startsWith("/watch")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        {!isWatchPage && <Sidebar />}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
