import styled from "styled-components";

const MenuHeader = styled.div `
    display: flex;
    width: 95vw;
    height: 29px;
    margin: 2vh 0 15px 2.5vw;
    justify-content: space-between;
    align-items: center;
    
    div {
        display: flex;
    }
    h1 {
        font-family: 'Molengo', sans-serif;
        font-size: 29px;
        margin-left: 5vw;
    }

`;

const TextCategory = styled.h1 `
    font-family: 'Molengo', sans-serif;
    font-size: 22px;
    margin-left: 5vw;
`
const ConteinerProducts = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vh;

    h4 {
        font-family: 'Molengo', sans-serif;
        font-size: 30px;
    }
`;

const ProductConteiner = styled.div `
    background-color: #740001;
    width: 85vw;
    height: 22vh;
    margin-bottom: 2vh;
    border-radius: 6px;
    display: flex;

`;

const ProductImg = styled.div `
  width: 113px;
  height: 115px;
  margin: 17px;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  background-color: #ffffff40;
  img {
    width: auto;
    height: 100%;
    border-radius: 6px;
  } 
`;

const AddIcon = styled.div `
    position: fixed;
    right: 8.5vw;
    margin-top: 6px;
`;

const ProductDescription = styled.div `
    margin-top: 17px;
    display: flex;
    flex-direction: column;
    width: 160px;
    font-family: 'Molengo', sans-serif;
    position: relative;
    
    h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 150px;
        color: #D3A625;
    }
    
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px; 
        width: 158px;
        color: #D3A625;
    }

    h2 {
        position: absolute;
        bottom: 17px;
        right: 15px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #D3A625;
    }
`;


export {
  MenuHeader,
  ProductConteiner,
  TextCategory,
  ConteinerProducts,
  ProductImg,
  ProductDescription,
  AddIcon,
}