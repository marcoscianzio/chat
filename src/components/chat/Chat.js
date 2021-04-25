import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import NothingSelected from "./NothingSelected";

const Chat = () => {
    const { active } = useSelector((state) => state.chat);
    return (
        <Container>
            {active !== null ? (
                <>
                    <MessageList />
                    <MessageInput />
                </>  
            ) : (
                <NothingSelected />
            )}
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export default Chat;
