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

const Navbar = styled.div `
    z-index: 2;
    background-color: #740001;
    width: 63vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 17px;
    font-family: 'Molengo', sans-serif;

    h1 {
        font-size: 26px;
        line-height: 31px;
        color: #D3A625;
    }

    h2 {
        font-size: 20px;
        color: #D3A625;
        margin: 15px 0 15px 0 ;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: #D3A625;
        margin: 10px 0 0 9px;
    }

    h3, a{
        position: fixed;
        width: 60vw;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #D3A625;

        left: 8px;
        bottom: 8px;
    }
`;

const RightNavbar = styled.div `
    z-index: 2;
    background-color: #000;
    width: 37vw;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    opacity: 0.6;
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
        font-size: 24px;
    }
`;

const ProductConteiner = styled.div `
    background-color: #740001;
    box-sizing: content-box;
    width: 85vw;
    height: 22vh;
    margin-bottom: 2vh;
    border-radius: 6px;
    display: flex;
    border: ${({isSelected}) => isSelected ? "6px solid #D0D4E9" : "none" };

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
  Navbar,
  RightNavbar,
}