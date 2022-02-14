import { useContext } from "react";
import CartContainer from "../../components/CartContainer";
import Screen from "../../components/Screen";
import CartContext from "../../contexts/CartContext";
import CartUnit from "../../components/CartUnit";
import BottomInfos from "../../components/BottomInfos";
import { HeaderMenu } from "../../style/paymentStyles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";


function ShoppingCart(){

    const {cartList} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Screen>
            <HeaderMenu>
            <AiOutlineArrowLeft color='#460001'  size='24px' onClick = {() => navigate('/')}/>
            </HeaderMenu>
            <CartContainer>
                {cartList.map(c =><CartUnit product={c}></CartUnit>)}
            </CartContainer>
            <BottomInfos></BottomInfos>
        </Screen>
    )
}

export default ShoppingCart;