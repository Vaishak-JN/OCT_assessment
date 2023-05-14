import { useState, useEffect, useContext } from "react";
import RegisterFrom from "./RegisterFrom";
import LoginFrom from "./LoginForm";
import AppContext from "../store/app-context";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Modal = () => {


    const [registraion, setRegistration] = useState(true)
    const [user, setUser] = useState({})

    const { loginUser, showModalHandler } = useContext(AppContext)

    console.log(user)

    const changeRegistration = () => {
        setRegistration(false)
    }

    const createTempUser = (user) => {
        setUser(user)
    }

    const login = () => {
        loginUser(user)
        showModalHandler()
    }

    return (
        <div className="modal">
            {registraion ? <RegisterFrom handleTempUser={createTempUser} changeRegistration={changeRegistration} /> : <LoginFrom handleLogin={login} />}

        </div>
    )
}

export default Modal