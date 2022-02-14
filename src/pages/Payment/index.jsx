import Screen from "../../components/Screen.jsx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AddNewCard, ConteinerCards, HeaderMenu } from "../../style/paymentStyles.js";
import Card from "./Card.jsx";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import api from "../../services/api.jsx";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import BottomInfos from '../../components/BottomInfos'
import CartContext from "../../contexts/CartContext.jsx";


function Payment(){
    
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const { shopCart, cartList } = useContext(CartContext);

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${auth.token}`
            }
        }
        api.getCards(config)
            .then((res) => setCards(res.data))
            .catch((err) => console.log(err));

    }, [auth.token]);

    
    function finishCart () {
      if (selectedCard.length === 0) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Selecione algum cartão para prosseguir</h1>`,
            width: '95%',
            background: '#760001    ',
            confirmButtonColor: '#EEBA30',
            confirmButtonText: 'Excluir',
        })
      } else {
        const config = {
            headers: {
                'Authorization': `Bearer ${auth.token}`
            }
        }
        const products = [];

        for (let i = 0; i < cartList.length; i++) {
            const idProduct = cartList[i]._id;
            const qtd = cartList[i].qtd;

            const product = {idProduct, qtd};
            products.push(product);
        }
        const body = { products, cardId: selectedCard._id}
        api.checkoutCart(body, config)
            .then(() => {
                Swal.fire({
                    html: `<h1 style = 'color: #fff'>Compra finalizada com sucesso</h1>`,
                    width: '95%',
                    background: '#760001    ',
                    confirmButtonColor: '#EEBA30',
                    confirmButtonText: 'Voltar para página principal!',
                });
                shopCart.clear();
                navigate('/');
            })
            .catch((err) => console.log(err));

        
      }
    }
    return (
        <Screen justify="flex-start">
          <HeaderMenu>
            <AiOutlineArrowLeft color='#460001'  size='24px' onClick = {() => navigate('/shopping-cart')}/>
          </HeaderMenu>
          <AddNewCard onClick = {() => navigate('/new-card')}> 
            <BsFillPlusCircleFill color='#460001'  size='32px'/>
            <h1>Adicionar um novo cartão</h1>
          </AddNewCard>
          
          <ConteinerCards>
            {
                cards.length === 0 ? 
                (
                    true
                )
                :
                (
                    cards.map((card, index) => <Card key={index} card={card} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>)
                )
            }
            
          </ConteinerCards>
          <BottomInfos finishCart={finishCart}>
          </BottomInfos>
        </Screen>
    )
}

export default Payment;