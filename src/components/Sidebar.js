import React from "react";
import styled from "styled-components";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { sidebarItemsData } from "../data/Sidebardata";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useHistory } from "react-router-dom";
function Sidebar({ rooms }) {
  const history = useHistory();
  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  // add channel
  const addChannel = () => {
    // pop-up
    const promptName = prompt("Enter channel name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>vikky singh</Name>
        <NewMessage>
          <AddCircleOutlineOutlinedIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelsItem>
            {item.icon}
            {item.text}
          </MainChannelsItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              #{item.name}
              <span>
                <DeleteForeverIcon
                  onClick={(event) =>
                    db.collection("rooms").doc(item.id).delete()
                  }
                />
              </span>
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
  height: 100vh;
`;

const WorkSpaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  font-size: 1.2rem;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;
const MainChannels = styled.div`
  padding-top: 20px;
`;
const MainChannelsItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350036;
  }
`;
const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;
const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding-left: 19px;
  padding-right: 12px;
  cursor: pointer;
  margin-bottom: 5px;
`;

const ChannelsList = styled.div``;
const Channel = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  justify-content: space-between;
  margin-bottom: 5px;
  :hover {
    background: #350036;
  }
  span {
    margin-top: 5px;
    margin-right: 10px;
    line-height: 5px;
  }
  span:hover {
    color: red;
  }
`;
