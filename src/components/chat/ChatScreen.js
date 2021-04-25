import React from 'react'
import styled from 'styled-components'
import Chat from './Chat'
import ChatSideBar from './ChatSideBar'

const ChatScreen = () => {
    return (
        <Container>
           <Wrapper>
               <ChatSideBar />
               <Chat />
            </Wrapper> 
        </Container>
    )
}

const Container = styled.div`
    background-image: url('images/container-background.jpg');
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div`
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    height: 90%;
    width: 90%;
    display: flex;

`

export default ChatScreen
