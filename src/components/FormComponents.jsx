import { Link } from "react-router-dom";
import styled from "styled-components";


const height = '46px';


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 700px;
    gap: 15px;
`;
const Button = styled.button`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #B48D1F;
    cursor: pointer;
    width: 100%;
    height: calc(${height} * 0.95);
    border-radius: 5px;
    background-color:  #D5D784;
`;
const Input = styled.input`
    width: 100%;
    color: #000;
    font-size: 20px;
    background: #FFFFFF;
    padding: 15px 16px;
    border-radius: 5px;
    height: ${height};

  ::placeholder {
    color: #D3A625;
    font-size: 20px;
    font-family: 'Titillium Web', sans-serif;
  }
`;
const StyledLink = styled(Link)`
    all: unset;
    margin-top: 22px;
    box-sizing: border-box;
    cursor: pointer;
    color: #000;
    font-style: italic;
    font-size: 15px;
`;

export {
    Button,
    Input,
    Form,
    StyledLink,
}