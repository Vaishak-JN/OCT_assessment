import React, { useEffect, useState } from 'react'
import AppContext from './app-context'
import earphones from "../assets/Earphones.png"
import ps from "../assets/ps.png"
import smartphone from "../assets/Smartphone.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = [
    {
        id: 1,
        title: "Earphones",
        price: 20,
        compare_price: 25000,
        offer_start: new Date("May 18, 2023 15:00:00").getTime(),
        soldout: false,
        img: earphones
    },
    {
        id: 2,
        title: "Game Console",
        price: 20,
        compare_price: 50000,
        offer_start: new Date("May 17, 2023 15:00:00").getTime(),
        soldout: false,
        img: ps
    },
    {
        id: 3,
        title: "Smartphone",
        price: 20,
        compare_price: 70000,
        offer_start: "",
        soldout: true,
        img: smartphone
    },
]

const AppContextProvider = ({ children }) => {

    const [otp, setOtp] = useState("")
    const [auth, setAuth] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState(null)


    useEffect(() => {
        if (!otp) return

        toast(`Your otp is ${otp}`)
    }, [otp])

    const createOtp = () => {
        let newOtp = Math.floor(Math.random() * 9000 + 1000).toString();
        setOtp(newOtp)
    }



    const showModalHandler = () => {
        setShowModal(!showModal)
    }

    const loginUser = (data) => {
        setUser(data)
        setAuth(true)
    }

    const logoutUser = () => {
        setOtp("")
        setAuth(false)
        setShowModal(false)
        setUser(null)
    }

    const appContext = {
        items: Products,
        createOtp,
        otp,
        auth: auth,
        showModal: showModal,
        showModalHandler,
        user,
        loginUser,
        logoutUser
    }

    return (

        <>
            <AppContext.Provider value={appContext}>
                {children}
            </AppContext.Provider>
            <ToastContainer />
        </>
    )

}

export default AppContextProvider