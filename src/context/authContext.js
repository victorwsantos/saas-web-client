import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const AuthContext = createContext(null)

export function AuthProvider({
  children,
}) {
  const [user, setUser] = useState(null)

  const [loading, setLoading] =
    useState(true)

  // INIT AUTH
  useEffect(() => {
    const storedUser =
      localStorage.getItem("user")

    const storedToken =
      localStorage.getItem("token")

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  // LOGIN
  async function login({
    user: username,
    password,
  }) {
    try {
      // depois isso vira API real
      // const response = await fetch("/api/login")

      if (!username || !password) {
        throw new Error(
          "Credenciais inválidas"
        )
      }

      // MOCK
      const mockUser = {
        id: 1,
        user: username,
        role: "admin",
      }

      const mockToken =
        "fake-token-123"

      localStorage.setItem(
        "user",
        JSON.stringify(mockUser)
      )

      localStorage.setItem(
        "token",
        mockToken
      )

      setUser(mockUser)

      return mockUser
    } catch (err) {
      console.error(
        "Login error:",
        err
      )

      throw err
    }
  }

  // LOGOUT
  function logout() {
    localStorage.removeItem("user")

    localStorage.removeItem("token")

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: true,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// HOOK
export function useAuth() {
  return useContext(AuthContext)
}