import { useContext } from "react"
import AppContext from "../store/app-context"


const LogoutBtn = () => {

    const { logoutUser } = useContext(AppContext)

    return (
        <button onClick={logoutUser} className="logout">Logout</button>
    )
}

export default LogoutBtn