import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedToken = localStorage.getItem("token")

    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
    }
  }, [])

  const loginUser = (jwtToken) => {
    localStorage.setItem("token", jwtToken)
    setToken(jwtToken)
    setIsAuthenticated(true)
  }

  const logoutUser = () => {
    localStorage.removeItem("token")
    setToken(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}