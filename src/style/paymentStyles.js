import styled from "styled-components";

const HeaderMenu = styled.div `
    margin: 0 0 2vh -90vw;
`;

const AddNewCard = styled.div `
    margin-left: -15vw;
    display: flex;
    align-items: center;
    margin-top:2vh;

    h1 {
        margin-left: 10px;
        font-size: 18px;
        color: #460001;
    }
`;

const ConteinerCards = styled.div `
    margin-top: 1vh;
`;

const CardStyle = styled.div `
    width: 80vw;
    height: 10vh;
    background-color: #740001;
    border-radius: 5px;
    margin-top: 3vh;
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: relative;

    h1 {
        color: #D3A625;
        font-size: 18px;
    }

    div {
        position: absolute;
        right: 3px;
        top: 5px;
    }
`;

const BottomPayment = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #460001;
    height: 18vh;
    width: 100vw;
    z-index: 2;
    display: flex;
    justify-content: center;

`;

const ButtonConfirm = styled.button `
    position: fixed;
    z-index: 2;
    bottom: 4vh;
    background-color: #760001;
    color: #fff;
    border-radius: 6px;
    width: 60vw;
    height: 30px;
    font-size: 14px;
    text-align: center;
`;

export {
    HeaderMenu,
    AddNewCard,
    ConteinerCards,
    CardStyle,
    BottomPayment,
    ButtonConfirm,
}