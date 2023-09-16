import { ReactNode, createContext, useState, useEffect } from "react";

 const CartContext = createContext({})

type props = {
    children?:ReactNode
}


export const CartProvider = ({ children }:props) => {
    const [productCount, setProductCount] = useState(new Array<{}>)
    useEffect(() => {
        console.log(productCount);
        
    },[productCount])

    return (
        <CartContext.Provider value= {
            [productCount, setProductCount]
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext