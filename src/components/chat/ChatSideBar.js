import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ChatAddNew from "./ChatAddNew";
import ChatList from "./ChatList";
import { startLogout } from "../../actions/auth";
const ChatSideBar = () => {
    const { displayName, profilePic } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <Container>
            <UserProfileContainer>
                <ProfilePicture src={profilePic} />
                <ProfileName>{displayName}</ProfileName>
                <button onClick={handleLogout}>
                    <i class="fas fa-sign-out-alt"></i>
                </button>
            </UserProfileContainer>
            <ChatAddNew />
            <ChatList />
        </Container>
    );
};

const Container = styled.div`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const UserProfileContainer = styled.div`
    height: 5em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;

    button {
        background-color: none;
        border: none;
        margin-left: 0.5em;
        font-size: 1em;
        i{
            color: #e86a74;
        }
    }

`;

const ProfilePicture = styled.img`
    margin-right: 1em;
    width: 2em;
    height: 2em;
    border-radius: 50%;
`;

const ProfileName = styled.div`
    font-weight: 700;
    word-break: break-all;
`;

export default ChatSideBar;
