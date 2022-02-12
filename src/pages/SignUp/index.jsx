import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, StyledLink } from "../../components/FormComponents";
import { Logo } from "../../components/Logo";
import Screen from "../../components/Screen";
import api from "../../services/api";

function SignUp(){
    const [pageForm, setPageForm] = useState({
        name:'',
        email:'' ,
        password:'',
        confirmPassword:'',
    });

    const navigate = useNavigate();

    function handleChange(e){
        setPageForm({...pageForm, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();

        if (pageForm.password !== pageForm.confirmPassword) {
            alert("As senhas devem ser iguais");
            return;
        }

        const body = {...pageForm};
        delete body.confirmPassword;


        api.signUp(body)
        .then((resp) =>{ 
            navigate('/login'); 
        })
        .catch((err)=> {console.log(err)});
    }

    return (
        <Screen>
            <Logo />
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Nome"
                    type='text' 
                    name="name"
                    value={pageForm.name}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <Input
                    placeholder="E-mail"
                    type="email" 
                    name="email"
                    value={pageForm.email}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <Input
                    placeholder="Senha"
                    type="password" 
                    name="password"
                    value={pageForm.password}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <Input
                    placeholder="Confirme a senha"
                    type="password" 
                    name="confirmPassword"
                    value={pageForm.confirmPassword}
                    onChange={(e) => handleChange(e)}
                    required
                />
                <Button type="submit" > Cadastrar </Button>
            </Form>
            <StyledLink to='/login'>Ainda é trouxa? Faça o cadastro e vire bruxo agora!</StyledLink>
        </Screen>
    )
}

export default SignUp;