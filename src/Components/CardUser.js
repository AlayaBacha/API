import { Link } from "react-router-dom"

const CardUser=({el})=>{
    return(
        <div>
        <h3><Link to={`/descuser/${el.id}`}>{el.name}</Link></h3>
        </div>
    )
}
export default CardUser