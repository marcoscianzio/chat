import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import { startAddingChatNew } from "../../actions/chat";
import { useForm } from "../../hooks/useForm";
const ChatAddNew = () => {
    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        newChat: "",
    });
    const { newChat } = formValues;

    const handleSubmit = (e) => {
        if(newChat.trim().length < 1) {
            return Swal.fire('Error', 'You can not create a room without a name', 'error')
        }
        e.preventDefault();
        dispatch(startAddingChatNew(newChat));
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Create a new chat room.."
                    name="newChat"
                    value={newChat}
                    onChange={handleInputChange}
                />
            </form>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;

    input {
        width: 100%;
        height: 100%;
        border: none;
        padding: 1em;
        outline: none;
    }
`;
export default ChatAddNew;
