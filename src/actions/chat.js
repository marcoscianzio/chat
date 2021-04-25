import { useState } from "react";
import { types } from "../components/types/types";
import { db } from "../firebase/firebase"

export const startAddingChatNew = (chatName) => {
    return async(dispatch) => {
        const newChat = {
            chatName,
            messages: [],
            lastMessage: ''
        }
        db.collection('chats').add(newChat);
        dispatch(addChatNew(chatName, newChat.lastMessage))
    }
}

const addChatNew = (chatName, lastMessage) => ({
    type: types.chatAddNew,
    payload: {
        chatName,
        lastMessage
    }
});

export const setActive = (chat) => ({
    type: types.setActive,
    payload: chat
})