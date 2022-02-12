import styled from "styled-components";

const LogoStyle = styled.h1`
    text-transform: uppercase;
    font-size: 50px;
    margin-bottom: 70px;
`;

const MiniLogoStyle = styled(Logo)`
    font-size: 26px;
`
function Logo(){
    return  <LogoStyle>ACCIOELO</LogoStyle>
};
function MiniLogo(){
    return  <MiniLogoStyle>ACCIOELO</MiniLogoStyle>
};

export {
    Logo,
    MiniLogo,
}