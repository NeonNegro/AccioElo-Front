import styled from "styled-components";


function Screen({children}){

    const Screen = styled.div`
        width: 100vw;
        min-height: 100vh;
        background-color: #EEBA30;
        display: flex;
    `;

    return <Screen>{children}</Screen>
}


export default Screen;