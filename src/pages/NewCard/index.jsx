import { useNavigate } from "react-router";
import Screen from "../../components/Screen.jsx";
import { Form, Input, Button } from "../../components/FormComponents.jsx";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from "react/cjs/react.development";
import { HeaderMenu } from '../../style/paymentStyles.js';
import Swal from "sweetalert2";
import api from "../../services/api.jsx";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";

function NewCard () {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [validThru, setValidThru] = useState('');

  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);

  function registerCard (e) {
    e.preventDefault();
    if (cardNumber.length < 15) {
        Swal.fire({
            html: `<h1 style = 'color: #fff'>Digite um código com 16 caracteres</h1>`,
            width: '95%',
            background: '#760001    ',
            confirmButtonColor: '#EEBA30',
            confirmButtonText: 'Excluir',
        })
    } else {
        const body = { name, cardNumber, securityNumber, validThru };
        const config = {
            headers: {
                'Authorization': `Bearer ${auth.token}`
            }
        }
        api.addCard(body, config)
          .then(() => navigate('/payment'))
          .catch((err) => console.log(err))
    }

  }
  return (
    <Screen justify='flex-start'>
      <HeaderMenu>
        <AiOutlineArrowLeft color='#460001'  size='24px' onClick = {() => navigate('/payment-data')}/>
      </HeaderMenu>

      <Form onSubmit={registerCard}>
        <Input
            placeholder="Nome do cartão"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        
        <Input
            placeholder="Número do cartão"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
        />
        
        <Input
            placeholder="Número de segurança"
            value={securityNumber}
            onChange={(e) => setSecurityNumber(e.target.value)}
            required
        />
        
        <Input
            placeholder="Data de validade"
            value={validThru}
            onChange={(e) => setValidThru(e.target.value)}
            required
        />

        <Button type="submit">
          Salvar cartão
        </Button>
      </Form>
    </Screen>
  );
}

export default NewCard;