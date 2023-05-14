import { useContext } from "react"
import AppContext from "../store/app-context"
import ProductCard from "./ProductCard"


const ProductsSections = () => {

    const { items: products } = useContext(AppContext)
    // console.log(items)
    return (
        <div className="product-section">
            <h3>Shop to save 20 coin!</h3>
            <div className="products-list">
                {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default ProductsSections