import { useState } from "react"
import api from "../api"
import { useNavigate } from "react-router-dom"

function Signup(){

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSignup = async ()=>{

    try{

      const res = await api.post("/auth/signup",{
        name,
        email,
        password
      })

      alert("Account created successfully")

      navigate("/login")

    }catch(error){

      console.log(error.response?.data)

      alert(error.response?.data?.message || "Signup failed")

    }

  }

  return(

    <div>

      <h2>Signup</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleSignup}>
        Signup
      </button>

    </div>

  )

}

export default Signup