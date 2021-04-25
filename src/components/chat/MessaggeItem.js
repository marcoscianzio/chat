import React from "react";
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import { useSelector } from "react-redux";
import styled from "styled-components";


const MessaggeItem = ({ user, content, uid, date }) => {
    TimeAgo.addLocale(es);
    const timeAgo = new TimeAgo("es");
    const { uid:ourId } = useSelector((state) => state.auth);
    console.log(uid, ourId)
    return (
        <Container style={
            uid == ourId ? ({justifyContent: 'flex-end'}) :({justifyContent: 'flex-start'})
            
        }>
            <Wrapper>
                <UserName>{user}</UserName>
                <div>{content}</div>
                <MessageDate>{timeAgo.format(new Date(date))}</MessageDate>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 1em;
`;
const Wrapper = styled.div`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    height: auto;
    width: auto;
    padding: 1em;
    border-radius: 1em;
    word-break: break-all;
`;

const UserName = styled.div`
    margin-bottom: 0.5em;
    font-weight: 700;
    font-size: 0.8em;
`

const MessageDate = styled.div`
    margin-top: 1em;
    font-size: 0.5em;

`

export default MessaggeItem;
