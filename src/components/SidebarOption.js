import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
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
  font-weight: 300;
`;

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if(channelName) {
      db.collection('room').add({
        name: channelName,
      });
    }
  };
  
  const selectChannel = () => {
    if(id) {
      dispatch(enterRoom({
        roomId: id,
      }));
    }
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
