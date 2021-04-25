import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {startLoginWithGoogle} from '../../actions/auth';

const LoginScreen = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(startLoginWithGoogle());
    }

    return (
        <Container>
            <GradientCap></GradientCap>
            <Wrapper>
                <img src="images/mensaje.svg" />
                <Title>Bienvenido!</Title>
                <Button onClick={handleLogin}>Iniciar sesión con google</Button>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    background-image: url("images/fondo.jpg");
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: -20% 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const GradientCap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: #0f0c29; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #24243e,
        #302b63,
        #0f0c29
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #24243e,
        #302b63,
        #0f0c29
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Wrapper = styled.div`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 1em;
    width: 50%;
    height: 60%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 2em;
    font-weight: 800;
    margin-top: 1em;
    color: white;
`;

const Button = styled.button`
    margin-top: 1.5em;
    padding: 1em 5em 1em 5em;
    border: none;
    color: white;
    background: transparent;
    border: 1px solid white;
    border-radius: 1em;
    font-weight: 700;
    font-size: 0.8em;

    &:hover{
        backdrop-filter: blur(10px);
        color: black;
    }
`;

export default LoginScreen;
