import { useEffect,useState } from "react"
import api from "../api"
import { Link } from "react-router-dom"

function Dashboard(){

const [balance,setBalance] = useState(0)

useEffect(()=>{

const token = localStorage.getItem("token")

api.get("/account/balance",{
headers:{
Authorization:`Bearer ${token}`
}
}).then(res=>{
setBalance(res.data.balance)
})

},[])

return(

<div>

<h2>Dashboard</h2>

<h3>Balance: ₹{balance}</h3>

<Link to="/send">Send Money</Link>

<br/>

<Link to="/statement">Account Statement</Link>

</div>

)

}

export default Dashboard