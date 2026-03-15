import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async ()=>{

const res = await api.post("/auth/login",{
email,
password
})

localStorage.setItem("token",res.data.token)

navigate("/dashboard")

}

return(

<div>

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login