import { CardStyle } from '../../style/paymentStyles.js';
import { AiOutlineClose } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext.jsx';
import api from '../../services/api.jsx';

function Card ({ card, selectedCard, setSelectedCard }) {
    
    const { auth } = useContext(AuthContext);
    let border = {};

    function selectCard(){
        setSelectedCard(card);
    }
    
    if(selectedCard.cardNumber === card.cardNumber){
        border = {
            border: '4px solid #D0D4E9'
        };
    }

    function deleteCard () {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Tem certeza de que deseja excluir este cartão?</h1>`,
            showDenyButton: true,
            width: '95%',
            background: '#760001    ',
            confirmButtonColor: '#EEBA30',
            confirmButtonText: 'Excluir',
            denyButtonColor: '#EEBA30',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
              const config = { headers: { "Authorization": `Bearer ${auth.token}` } }
              api.deleteCard(card._id, config)
                .then(() => window.location.reload())
                .catch((err) => {
                   console.log(err)
                  })
                }
        })
    }
    
    return (
        <CardStyle style={border} onClick={selectCard}>
            <div>
                <AiOutlineClose color='#D3A625' onClick={deleteCard} />
            </div>
            <h1>{card.name}</h1>
        </CardStyle>
    );
}

export default Card;