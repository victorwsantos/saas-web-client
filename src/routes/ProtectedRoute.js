import { Navigate } from "react-router-dom"

import { useAuth } from "../context/authContext"

export default function ProtectedRoute({
  children,
}) {
  const {
    isAuthenticated,
    loading,
  } = useAuth()

  if (loading) {
    return (
      <p>
        Carregando...
      </p>
    )
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }

  return children
}