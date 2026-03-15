import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const loginUser = async () => {

    try {

      const response = await api.post("/auth/login", {
        email,
        password
      })

      const token = response.data.token

      localStorage.setItem("token", token)

      navigate("/dashboard")

    } catch (err) {

      setError("Invalid email or password")

    }

  }

  return (
    <div>

      <h2>User Login</h2>

      {error && <p style={{color:"red"}}>{error}</p>}

      <input
        type="email"
        placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={loginUser}>
        Login
      </button>

    </div>
  )
}

export default Login