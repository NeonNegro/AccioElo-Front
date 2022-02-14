import { BsTrash } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 21px;
    display: flex;
`

const ImgContainer = styled.div`
    width: 80px;
    height: 80px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Info = styled.div`
    margin-left: 10px;
    margin-right: auto;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;

    * {
        font-size: 18px;
        color: #D3A625;
        margin-bottom: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

const Name = styled.h1`
    
    
`;
const Qtd = styled.div`
    display:flex;
    align-items: center;
    gap: 5px;
    
    span{
        margin-bottom: 8px;
    }
    
`;
const Value = styled.h1`
    
    
`;

const Trash = styled.span`
    svg {
        margin-left:auto;
        cursor: pointer;
    }
`;

export {
    Container,
    Info,
    ImgContainer,
    Name,
    Qtd,
    Value,
    Trash,
}