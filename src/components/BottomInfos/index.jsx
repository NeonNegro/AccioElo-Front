import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import CartContext from "../../contexts/CartContext";
import { Container } from "./style";

function BottomInfos({ finishCart }){

    const { shopCart, cartList } = useContext(CartContext);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    function nextScreen() {
        if (location.pathname === '/payment') {
            finishCart();
        } else {
            navigate('/payment');
        }
    }


    return (
        <Container>
            <div>
                <span>TOTAL:</span> 
                <span>ʛ {shopCart.total()}</span>
            </div>
            <button onClick={nextScreen} disabled={!cartList.length || !auth }> PROSSEGUIR </button>
        </Container>
    )
}

export default BottomInfos;