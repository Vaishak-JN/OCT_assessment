import userIcon from "../assets/User-Icon.png"
import editIcon from "../assets/Edit-Icon.png"
import { useContext } from "react"
import AppContext from "../store/app-context"


const UserInfo = () => {
    const { user } = useContext(AppContext)
    return (
        <div className="userinfo sidebar-tab">
            <img src={userIcon} alt="icon" />
            <div>
                <h3>{user.name}</h3>
                <p>{user.number}</p>
                <p>{user.email}</p>
            </div>
            <img src={editIcon} alt="icon" />
        </div>
    )
}

export default UserInfo