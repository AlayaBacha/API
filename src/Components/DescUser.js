import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Descuser=()=>{
    const {id} = useParams()
    const [User,setUser]= useState({})
    const [Loading,SetLoading]= useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>SetLoading(false))
        .catch((err)=>console.log(err))

    },[])
    return(
        <div className="bb">
            {
                Loading? <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
                :
                <>
                <h1>{User.name}</h1>
                <h2>{User.email}</h2>
                <h3>{User.address.street}</h3>
                </>
            }
        </div>
        
    )
}
export default Descuser
