import { createContext, useState } from "react"

const CartContext = createContext();

export function CartProvider({children}){

    const persistedCart = JSON.parse(localStorage.getItem('cart'));
    const [cartList, setCart] = useState(persistedCart ? persistedCart : []);


    function add(product){
        product.qtd = 1;
        cartList.push(product);
        persist([...cartList]);
    }

    function remove(id){
        const newCart = cartList.filter(c => c._id !== id);
        persist([...newCart]);
    }

    function clear() {
        persist([]);
    }

    function plus(id){
        const index = cartList.findIndex((c => c._id === id));
        cartList[index].qtd++;
        persist([...cartList]);
    }

    function minus(id){
        const index = cartList.findIndex((c => c._id === id));
        if(cartList[index].qtd > 1)
            cartList[index].qtd--;
        persist([...cartList]);
    }

    function persist(cart){
        setCart([...cart]);
        localStorage.setItem('cart', JSON.stringify([...cart]));
        console.log([...cart]);
    }

    function total(){
        let sum = 0;
        cartList.forEach(p => {
            sum += (p.price* p.qtd);
        });
        return sum;
    }

    function list(){
        return cartList
    }

    const shopCart ={
        add,
        remove,
        list,
        plus,
        minus,
        total,
        clear,
    }

    return(
        <CartContext.Provider value={{cartList, shopCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;