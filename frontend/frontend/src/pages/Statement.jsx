import { useEffect,useState } from "react"
import api from "../api"

function Statement(){

const [data,setData] = useState([])

useEffect(()=>{

const token = localStorage.getItem("token")

api.get("/account/statement",{
headers:{
Authorization:`Bearer ${token}`
}
}).then(res=>{
setData(res.data)
})

},[])

return(

<div>

<h2>Account Statement</h2>

<table border="1">

<thead>

<tr>
<th>Date</th>
<th>Type</th>
<th>Amount</th>
</tr>

</thead>

<tbody>

{data.map(tx=>(
<tr key={tx.id}
style={{
color:tx.transaction_type==="credit"
?"green":"red"
}}>

<td>{tx.created_at}</td>
<td>{tx.transaction_type}</td>
<td>₹{tx.amount}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default Statement