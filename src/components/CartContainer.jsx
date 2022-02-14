import styled from "styled-components";
import { bottomHeight } from "./BottomInfos/style";



const CartContainer = styled.div`
    margin-bottom: calc(${bottomHeight} + 15px); 
    background-color: #740001;
    width: 85vw;
    max-width: 400px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;

    img{
        width:100%;
    }
`;

export default CartContainer