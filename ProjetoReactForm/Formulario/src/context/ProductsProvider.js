import { useState } from "react"
import { loadProducts } from "../utils/storege"

export function ProductsProvider({ children }) {

    const [products, setProducts] = useState([loadProducts]);
    const addProduct = (product)=>{
        setProducts((prod)=>[...prod, product])
    }

    return (
        <ProductsProvider.Provider
            value={
                {
                    products,
                    addProduct
                }
            }
        >
            {children}
        </ProductsProvider.Provider>
    )
}