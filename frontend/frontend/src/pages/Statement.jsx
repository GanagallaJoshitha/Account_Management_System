import { useEffect, useState } from "react"
import api from "../api"

function Statement(){

  const [transactions,setTransactions] = useState([])

  useEffect(()=>{

    const fetchData = async () => {

      const token = localStorage.getItem("token")

      const res = await api.get("/account/statement",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      setTransactions(res.data)

    }

    fetchData()

  },[])

  return(

    <div>

      <h2>Transaction History</h2>

      <table border="1">

        <thead>

          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Sender</th>
            <th>Receiver</th>
          </tr>

        </thead>

        <tbody>

          {transactions.map(item => (

            <tr key={item.id}
              style={{
                color: item.transaction_type === "credit" ? "green" : "red"
              }}
            >

              <td>{item.created_at}</td>
              <td>{item.transaction_type}</td>
              <td>₹{item.amount}</td>
              <td>{item.sender_id}</td>
              <td>{item.receiver_id}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Statement