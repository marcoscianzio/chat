import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebase";
import { useForm } from "../../hooks/useForm";
const MessageInput = () => {
    const { id } = useSelector((state) => state.chat.active);
    const { displayName, uid } = useSelector((state) => state.auth);

    const [formValues, handleInputChange, reset] = useForm({
        message: "",
    });

    const { message } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message.trim().length < 1) {
            return Swal.fire('Error', 'You can not send an empty message', 'error')
        }
        const NewMessage = {
            uid,
            user: displayName,
            content: message,
            date: new Date().getTime(),
        };
        db.collection("chats").doc(id).collection("messages").add(NewMessage);
        reset();
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Send a message..."
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                />
                <button type="submit">Enviar</button>
            </Form>
        </FormContainer>
    );
};

const FormContainer = styled.div`
    width: 100%;
    height: 10%;
`;
const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;

    input {
        border: none;
        width: 85%;
        padding: 1em;
        outline: none;
    }

    button {
        border: none;
        width: 15%;

        &:hover{
            background-color: #c0c0c0;
        }
    }
`;
export default MessageInput;
