import { useState } from "react"
import { createPortal } from 'react-dom';
import icon from "../assets/Icon.png"
import SideBar from "./SideBar";
import Overlay from "./Overlay";
import { useContext } from "react";
import AppContext from "../store/app-context";
import Modal from "./Modal";

const Navbar = () => {

    const { showModal, showModalHandler } = useContext(AppContext)

    const [showSideBar, setShowSideBar] = useState(false)



    let classNames = showSideBar ? "show-sidebar" : "hide-sidebar"

    const showSideBarHnadler = () => {
        setShowSideBar(false)
    }

    return (
        <nav className="navbar">
            <button onClick={() => setShowSideBar(!showSideBar)} ><img src={icon} alt="icon" /></button>
            {
                // showSideBar && 
                createPortal(
                    <>
                        {showSideBar && <Overlay onClick={() => setShowSideBar(!showSideBar)} />}
                        <SideBar handleShowSideBar={showSideBarHnadler} classes={classNames} />
                    </>,
                    document.getElementById("side")
                )
            }

            {
                showModal &&
                createPortal(
                    <>
                        <Overlay onClick={showModalHandler} />
                        <Modal />
                    </>,
                    document.getElementById("modal")
                )
            }
        </nav>
    )
}

export default Navbar