import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { Container } from "./style";

function BottomInfos(){

    const { shopCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Container>
            <div>
                <span>TOTAL:</span> 
                <span>{shopCart.total()}</span>
            </div>
            <button onClick={() =>{navigate('/payment')}}> PROSSEGUIR </button>
        </Container>
    )
}

export default BottomInfos;