import { createContext, useState } from "react"

const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState(null);


    return(
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}