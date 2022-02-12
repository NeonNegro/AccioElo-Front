import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, StyledLink } from "../../components/FormComponents";
import { Logo } from "../../components/Logo";
import Screen from "../../components/Screen";
import api from "../../services/api";

function Login(){
    const [pageForm, setPageForm] = useState({
        email:'' ,
        password:'',
    });

    const navigate = useNavigate();

    function handleChange(e){
        setPageForm({...pageForm, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();

        debugger;

        const body = {...pageForm};

        api.signIn(body)
        .then((resp) =>{ 
            navigate('/'); 
        })
        .catch((err)=> {console.log(err)});
    }

    return (
        <Screen>
            <Logo />
            <Form onSubmit={handleSubmit}>
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
                <Button type="submit" > Entrar </Button>
            </Form>
            <StyledLink to='/sign-up'>Já é bruxo? Faça o login!</StyledLink>
        </Screen>
    )
}

export default Login;