import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api"

function Dashboard() {

  const [balance, setBalance] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchBalance = async () => {

      const token = localStorage.getItem("token")

      try {

        const res = await api.get("/account/balance", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setBalance(res.data.balance)

      } catch (error) {

        console.log("Error fetching balance")

      }

      setLoading(false)

    }

    fetchBalance()

  }, [])

  return (

    <div>

      <h1>Account Dashboard</h1>

      {loading ? (
        <p>Loading balance...</p>
      ) : (
        <h2>Current Balance: ₹{balance}</h2>
      )}

      <br />

      <Link to="/send">
        <button>Send Money</button>
      </Link>

      <br /><br />

      <Link to="/statement">
        <button>View Account Statement</button>
      </Link>

    </div>

  )

}

export default Dashboard