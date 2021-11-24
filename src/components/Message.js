import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  
  > .imageWrap {
    height: 50px;
    width: 50px;
    overflow: hidden;
    border-radius: 8px;
  } 

  > .imageWrap >img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  } 
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;


function Message({message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <div className='imageWrap'>
        <img src={userImage} alt={user} />
      </div>
      <MessageInfo>
      <h4> 
        {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
      </h4>
      <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
