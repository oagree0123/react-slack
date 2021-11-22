import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 260px;
  margin-top: 60px;
  color: white;
  border-top: 1px solid #49274b;
  background-color: var(--slack-color);

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  padding: 13px;
  display: flex;
  border-top: 1px solid #49274b;

  > .MuiSvgIcon-root {
    padding: 8px;
    font-size: 18px;
    color: #49274b;
    border-radius: 999px;
    background-color: white;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
  }

  > h3 > .MuiSvgIcon-root {
    margin-top: 1px;
    margin-right: 2px;
    font-size: 14px;
    color: green;
  }
`;

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('room'));
  
  channels?.docs.map((doc) => (console.log(doc.data().name)));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Oagree 0123</h2>
          <h3>
            <FiberManualRecordIcon />
            Oh Yes
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />

      {channels?.docs.map((doc) => (
        <SidebarOption 
          key={doc.id} 
          id={doc.id} 
          title={doc.data().name} 
        />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
