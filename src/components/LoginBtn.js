import { useContext, useState } from "react"
import { createPortal } from 'react-dom';
import Overlay from "./Overlay";
import Modal from "./Modal";
import AppContext from "../store/app-context";

const LoginBtn = ({ handleShowSideBar }) => {
    const { showModalHandler } = useContext(AppContext)

    // const [showModal, setShowModal] = useState(false)

    const clickHandler = () => {
        // setShowModal(true)
        showModalHandler()
        handleShowSideBar()
    }

    return (
        <>
            <button onClick={clickHandler} className="login-btn">
                Login
            </button>

        </>

    )
}
export default LoginBtn