import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-night to-abyss text-white">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-slate-950/50 px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout

