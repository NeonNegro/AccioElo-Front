import styled from "styled-components";


const ScreenStyle = styled.div`
        width: 100vw;
        min-height: 100vh;
        background-color: #EEBA30;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    `;

function Screen({children}){

    

    return <ScreenStyle>{children}</ScreenStyle>
}


export default Screen;