import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api"

function Dashboard(){

  const [balance, setBalance] = useState(0)

  const token = localStorage.getItem("token")

  useEffect(()=>{

    const loadBalance = async () => {

      try {

        const result = await api.get("/account/balance", {
          headers:{
            Authorization:`Bearer ${token}`
          }
        })

        setBalance(result.data.balance)

      } catch(err) {

        console.log("Unable to fetch balance")

      }

    }

    loadBalance()

  },[])

  const handleLogout = () => {

    localStorage.removeItem("token")

    window.location.href = "/login"

  }

  return(

    <div>

      <h1>Account Dashboard</h1>

      <h3>Available Balance : ₹{balance}</h3>

      <br/>

      <Link to="/send">Transfer Money</Link>

      <br/>
      <br/>

      <Link to="/statement">View Statement</Link>

      <br/>
      <br/>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>

  )

}

export default Dashboard