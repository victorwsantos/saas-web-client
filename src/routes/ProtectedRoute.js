import { Navigate } from "react-router-dom"
import { useAuth } from "..nte..thContext"

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <p>Carregando....
  }

  if (!isAuthenticated) {
    return <Navigate to..gin" replace />
  }

  return children
}