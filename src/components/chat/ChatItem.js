import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActive } from "../../actions/chat";

const ChatItem = ({name, lastMessage, id, messages}) => {

    const dispatch = useDispatch();
    const handleSetActive = () => {
        const activeChat = {
            id,
            name,
            messages
        }
        dispatch(setActive(activeChat));
    }

    return (
        <Container onClick={handleSetActive}>
            <ProfileImgContainer>
                <ProfileImg src="images/mensaje.svg"/>
            </ProfileImgContainer>
            <ProfileInformationContainer>
                <ProfileName>{name}</ProfileName>
                <LastMessage>{lastMessage}</LastMessage>
            </ProfileInformationContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: center;

    &:hover {
        backdrop-filter: blur(10px);
    }
`;


const ProfileImgContainer = styled.div`
    height: 100%;
    display: flex;
    margin-right: 1.2em;
    align-items: center;
    justify-content: center;

`

const ProfileImg = styled.img`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;

`
const ProfileInformationContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProfileName = styled.div`

    font-weight: 700;

`

const LastMessage = styled.div`

    font-weight: 300;
    font-size: 0.8em;

`


export default ChatItem;
