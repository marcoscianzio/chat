import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../../firebase/firebase";
import ChatItem from "./ChatItem";
import { loadChats } from "../../actions/chat";

const ChatList = () => {
    const dispatch = useDispatch();
    const [chats, setChats] = useState([]);
    useEffect(() => {
        db.collection("chats").onSnapshot((coll) => {
            setChats(
                coll.docs.map((chat) => ({
                    id: chat.id,
                    chat: chat.data(),
                }))
            );
        });
    }, []);

    return (
        <Container>
            {chats.map((chat) => {
                return (
                    <ChatItem
                        key={chat.id}
                        name={chat.chat.chatName}
                        lastMessage={chat.chat.lastMessage}
                        id={chat.id}
                        messages={chat.chat.messages}
                    />
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
`;

export default ChatList;
