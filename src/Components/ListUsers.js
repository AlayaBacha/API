import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"

const ListUsers=()=>{
    const [Users,setUsers]=useState([])
    const [Loading,SetLoading]=useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .then(()=>SetLoading(false))
        .catch((err)=>console.log(err))

    },[])
    return(
        <div className="azer">
        {
           Loading? <div class="d-flex justify-content-center">
           <div class="spinner-border" role="status">
             <span class="sr-only"></span>
           </div>
         </div> : Users.map(el=> <CardUser el={el}/> )
        }
        </div>
    )
}
export default ListUsers