import { Navigate } from "react-router-dom"

const PrivteRout=({children,Auth})=>{
    return(
        <div>
          {
                Auth ? children : <Navigate to="/"/>            }
        </div>

    )
}
export default PrivteRout