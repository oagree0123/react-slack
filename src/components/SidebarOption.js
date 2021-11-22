import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

const SidebarOptionContainer = styled.div`
  padding-left: 2px;
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 0;
`;

function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if(channelName) {
      db.collection('room').add({
        name: channelName,
      });
    }
  };
  
  const selectChannel = () => {

  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize='small' style={{ padding: 10 }} /> }
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span># </span> {title}
        </SidebarOptionChannel>
      ) }
    </SidebarOptionContainer>
  );
}

export default SidebarOption;
