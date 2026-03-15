import { useState } from "react"
import api from "../api"

function SendMoney(){

const [email,setEmail] = useState("")
const [amount,setAmount] = useState("")

const transfer = async ()=>{

const token = localStorage.getItem("token")

await api.post("/account/transfer",
{
receiverEmail:email,
amount:Number(amount)
},
{
headers:{
Authorization:`Bearer ${token}`
}
})

alert("Transfer Successful")

}

return(

<div>

<h2>Send Money</h2>

<input
placeholder="Receiver Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}
/>

<button onClick={transfer}>
Send
</button>

</div>

)

}

export default SendMoney