import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  padding: 0 50px;
  text-align: center;
  color: gray;
  border: 1px solid gray;
  border-radius: 6px;
  background-color: #421f44;
  opacity: 1;

  > input {
    min-width: 30vw;
    text-align: center;
    color: white;
    border: none;
    background-color: transparent;
    outline: 0;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar 
          // TODO: Add onclick
        />
        <AccessTimeIcon />
      </HeaderLeft>
      
      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search room' />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
