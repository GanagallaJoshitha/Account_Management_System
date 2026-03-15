import { useEffect, useState } from "react"
import api from "../api"

function Statement() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      try {

        const token = localStorage.getItem("token")

        const res = await api.get("/account/statement", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log("Transactions:", res.data)

        setTransactions(res.data)

      } catch (error) {
        console.error("Error fetching statement:", error)
      }

    }

    fetchData()

  }, [])

 return(

<div style={{
maxWidth:"900px",
margin:"40px auto",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
background:"#fff"
}}>

<h2> Account Activity</h2>

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

          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5">No transactions found</td>
            </tr>
          ) : (

            transactions.map((tx) => (

              <tr
                key={tx.id}
                style={{
                  color: tx.transaction_type === "credit" ? "green" : "red"
                }}
              >

                <td>
{new Date(tx.created_at).toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata"
})}
</td>
                <td>{tx.transaction_type}</td>
                <td>₹{tx.amount}</td>
                <td>{tx.sender_id}</td>
                <td>{tx.receiver_id}</td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  )

}

export default Statement