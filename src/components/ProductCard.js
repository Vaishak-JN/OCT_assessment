import { useContext, useEffect, useState } from "react";
import soldout from "../assets/soldout.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContext from "../store/app-context";

const ProductCard = ({ product }) => {

    const { auth, showModalHandler } = useContext(AppContext)


    const now = new Date().getTime()

    const [time, setTime] = useState()

    useEffect(() => {
        const timer = setTimeout(() => {
            let dist = product.offer_start - now

            let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((dist % (1000 * 60)) / 1000);

            setTime(hours + ":" + minutes + ":" + seconds)
        }, 1000)
    }, [time])


    const handleBuy = () => {

        if (!auth) {
            showModalHandler()
        } else {
            toast(`${product.title} ordered`);
        }


    }

    return (

        <div className="product-card">
            <div className={'product-img'} >
                <img src={product.img} alt="product" />
                {product.soldout && <img className="soldout" src={soldout} alt="product" />}

            </div >
            <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-compare-price">{product.compare_price}</p>
                {!product.soldout && <p className="offer-start">Offers starts in <span>{time}</span> <button className="buy-now" onClick={handleBuy}>Buy Now</button></p>}

            </div>
            <ToastContainer />
        </div>

    )
}

export default ProductCard