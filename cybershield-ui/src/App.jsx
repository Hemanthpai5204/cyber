import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/AppLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import DataProtection from './pages/DataProtection.jsx'
import NetworkMonitor from './pages/NetworkMonitor.jsx'
import AccessControl from './pages/AccessControl.jsx'
import AlertsCenter from './pages/AlertsCenter.jsx'
import LoginPage from './pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'data-protection', element: <DataProtection /> },
      { path: 'network-monitor', element: <NetworkMonitor /> },
      { path: 'access-control', element: <AccessControl /> },
      { path: 'alerts', element: <AlertsCenter /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
