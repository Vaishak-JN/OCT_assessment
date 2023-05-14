import { useContext, useEffect, useState } from "react";
import soldout from "../assets/soldout.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContext from "../store/app-context";

const ProductCard = ({ product }) => {

    const { auth, showModalHandler } = useContext(AppContext)



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
                {!product.soldout && <p className="offer-start">Offers starts in <span>{product.offer_start}</span> <button className="buy-now" onClick={handleBuy}>Buy Now</button></p>}

            </div>
            <ToastContainer />
        </div>

    )
}

export default ProductCard