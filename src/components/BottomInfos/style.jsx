import styled from "styled-components";

const bottomHeight = "100px";

const Container = styled.div`
    position:fixed;
    z-index: 2;
    width: 100vw;
    height: ${bottomHeight};
    background-color: #460001;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    bottom:0;
    padding: 13px 70px;
    color: white;

        div {
            display: flex;
            justify-content: space-between;
        }

        button {
            display: block;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
            width: 95%;
            max-width: 350px;
            margin: 28px auto;
            height: 30px;
            border-radius: 5px;
            background-color:  #760001;
        }
`

export {
    bottomHeight,
    Container,
}