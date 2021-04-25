import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { db } from "../../firebase/firebase";
import MessaggeItem from "./MessaggeItem";

const MessageList = () => {
    const { id } = useSelector((state) => state.chat.active);
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        db.collection("chats")
            .doc(id)
            .collection("messages")
            .orderBy("date")
            .onSnapshot((coll) => {
                setMessages(
                    coll.docs.map((message) => ({
                        id: message.id,
                        message: message.data(),
                    }))
                );
            });
    }, [id]);

    return (
        <Container>
            {messages.map((message) => {
                return (
                    <MessaggeItem
                        key={message.id}
                        id={message.id}
                        user={message.message.user}
                        content={message.message.content}
                        uid={message.message.uid}
                        date={message.message.date}
                    />
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    background-image: url("images/background.jpg");
    object-fit: contain;
    height: 90%;
    width: 100%;
    overflow-y: scroll;
`;

export default MessageList;
