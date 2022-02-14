import Screen from "../../components/Screen.jsx";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AddNewCard, BottomPayment, ButtonConfirm, ConteinerCards, HeaderMenu } from "../../style/paymentStyles.js";
import Card from "./Card.jsx";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";
import api from "../../services/api.jsx";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router";


function Payment(){
    
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    
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
          <BottomPayment>
              <ButtonConfirm>FINALIZAR A COMPRA</ButtonConfirm>
          </BottomPayment>
        </Screen>
    )
}

export default Payment;