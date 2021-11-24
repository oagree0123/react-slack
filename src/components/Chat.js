import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import Message from './Message';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

const ChatContainer = styled.div`
  flex: 0.7;
  margin-top: 60px;
  flex-grow: 1;
  overflow-y: scroll;
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
  }

  > h4 > strong {
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    font-size: 18px;
  } 
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessage = styled.div`

`;
const ChatBotoom = styled.div`
padding-bottom: 200PX;
`;

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(state => state.app.roomId);  
  const [roomDetails] = useDocument(
    roomId && db.collection('room').doc(roomId)
  )
  const [roomMessages, loading] = useCollection(
    roomId && 
      db
        .collection('room')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId])

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </HeaderLeft>

            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessage>
            {roomMessages?.docs.map(doc => {
              const { message, timestamp, user, userImage } = doc.data();    
              
              return (
                <Message 
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
          </ChatMessage>

          <ChatInput 
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
          <ChatBotoom ref={chatRef} />
        </> 
      )}
    </ChatContainer>
  );
}

export default Chat;
