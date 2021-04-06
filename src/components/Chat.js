import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  Switch,
} from "@material-ui/core";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";
function Chat({ user }) {
  const [darkMode, setDarkMode] = useState(false);
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  let { channelId } = useParams();
  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        console.log(messages);
        setMessages(messages);
      });
  };
  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo,
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };
  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header>
            <Channel>
              <ChannelName>#{channel?.name}</ChannelName>
              {darkMode ? (
                <ChannelInfo>
                  this is my channel helping to grow as long as we grow
                </ChannelInfo>
              ) : (
                <ChannelInfo style={{ color: "#606060" }}>
                  this is my channel helping to grow as long as we grow
                </ChannelInfo>
              )}
            </Channel>
            {darkMode ? (
              <ChannelDetails>
                <div>Details</div>
                <Info />
              </ChannelDetails>
            ) : (
              <ChannelDetails style={{ color: "#606060" }}>
                <div>Details</div>
                <Info />
              </ChannelDetails>
            )}
            <span>
              <Switch onChange={handleDarkMode} value={darkMode} />
            </span>
          </Header>

          <MessageContainer>
            {messages.length > 0 &&
              messages.map((data, index) => (
                <ChatMessage
                  darkMode={darkMode}
                  text={data.text}
                  name={data.user}
                  image={data.userImage}
                  timestamp={data.timestamp}
                />
              ))}
          </MessageContainer>

          <ChatInput darkMode={darkMode} sendMessage={sendMessage} />
        </CssBaseline>
      </ThemeProvider>
    </Container>
  );
}

export default Chat;
const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`;
const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 13);
  justify-content: space-between;
`;
const Channel = styled.div``;
const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  margin-left: 550px;
`;
const ChannelName = styled.div`
  font-weight: 700;
`;
const ChannelInfo = styled.div`
  font-weight: 400;

  font-size: 13px;
  margin-top: 8px;
`;
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`;
const MessageContainer = styled.div`
 display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
