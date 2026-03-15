import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"

function Signup(){

const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSignup = async ()=>{

await api.post("/auth/signup",{
name,
email,
password
})

alert("Account created")

navigate("/login")

}

return(

<div>

<h2>Signup</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleSignup}>
Signup
</button>

</div>

)

}

export default Signup