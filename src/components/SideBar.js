import { useContext } from "react"
import LogoutBtn from "./LogoutBtn"
import LoginBtn from "./LoginBtn"
import UserInfo from "./UserInfo"
import AppContext from "../store/app-context"

const tabs = ["SHIPPING ADDRESS", "CLAIM YOUR CERTIFICATE", "TERMS & CONDITIONS", "PRIVACY POLICY", "CONTACT US", "FAQ’S"]

const SideBar = ({ classes, blur, handleShowSideBar }) => {

    const { auth } = useContext(AppContext)

    return (
        <div onBlur={blur} className={`sidebar ${classes}}`} >
            <div>
                {auth ?
                    <>
                        <UserInfo />
                        {tabs.map(tab => <div className="sidebar-tab">{tab}</div>)}
                        <LogoutBtn />
                    </>
                    :
                    <LoginBtn handleShowSideBar={handleShowSideBar} />
                }
            </div>
        </div>
    )
}

export default SideBar