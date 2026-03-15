import { useState } from "react"
import api from "../api"

function SendMoney(){

  const [receiver,setReceiver] = useState("")
  const [amount,setAmount] = useState("")
  const [message,setMessage] = useState("")

  const transferFunds = async () => {

    const token = localStorage.getItem("token")

    try {

      await api.post("/account/transfer",
      {
        receiverEmail: receiver,
        amount: Number(amount)
      },
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      setMessage("Money transferred successfully")

    } catch(error) {

      setMessage(
        error.response?.data?.message || "Transfer failed"
      )

    }

  }

  return(

    <div>

      <h2>Transfer Money</h2>

      {message && <p>{message}</p>}

      <input
        placeholder="Receiver Email"
        onChange={(e)=>setReceiver(e.target.value)}
      />

      <input
        placeholder="Amount"
        onChange={(e)=>setAmount(e.target.value)}
      />

      <button onClick={transferFunds}>
        Send Money
      </button>

    </div>

  )

}

export default SendMoney