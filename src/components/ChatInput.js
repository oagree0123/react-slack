import React, { useState } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    padding: 20px;
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();
    
    console.log(channelId);
    
    if(!channelId) {
      console.log(channelId);
      return false;
    }

    db.collection('room').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input 
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)} 
          placeholder={`Message #${channelName}`} 
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
