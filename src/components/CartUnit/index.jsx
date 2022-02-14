import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { Container, ImgContainer, Info, Name, Qtd, Trash, Value } from "./style";
import { BsFillPlusCircleFill, BsTrash } from 'react-icons/bs';
import { AiFillMinusCircle } from "react-icons/ai";

function CartUnit({product}){
    console.log(product);
    const { shopCart } = useContext(CartContext);

    return (
        <Container>
            <ImgContainer><img src ={product.image} alt="imagem do produto"></img></ImgContainer>
            <Info>
                <Name>{product.name}</Name>
                <Qtd>
                <BsFillPlusCircleFill onClick={() => shopCart.plus(product._id)}  color={'#D3A625'} size='20px'/>
                <span>{product.qtd}</span>
                <AiFillMinusCircle onClick={() => shopCart.minus(product._id)} color={'#D3A625'} size='22px'/>
                </Qtd>
                <Value> Valor: ʛ {product.qtd * product.price}</Value>
            </Info>
            <Trash><BsTrash onClick={()=> shopCart.remove(product._id)}  size='22px' /></Trash>
        </Container>
    )
}


export default CartUnit;