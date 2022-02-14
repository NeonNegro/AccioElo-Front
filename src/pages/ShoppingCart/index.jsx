import { useContext } from "react";
import CartContainer from "../../components/CartContainer";
import Screen from "../../components/Screen";
import CartContext from "../../contexts/CartContext";
import CartUnit from "../../components/CartUnit";
import BottomInfos from "../../components/BottomInfos";

function ShoppingCart(){

    const {cartList} = useContext(CartContext);

    return (
        <Screen>
            <CartContainer>
                {cartList.map(c =><CartUnit product={c}></CartUnit>)}
            </CartContainer>
            <BottomInfos></BottomInfos>
        </Screen>
    )
}

export default ShoppingCart;