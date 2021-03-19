import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { Input } from "@material-ui/core";
function Header({ user, signOut }) {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <Input type="text" placeholder="Seatch..." />
          </Search>
        </SearchContainer>
        <HelpOutlineOutlinedIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage onClick={signOut}>
          <img
            src={
              user.photo
                ? user.photo
                : "https://img.icons8.com/color/2x/circled-user-male-skin-type-3--v2.gif"
            }
            alt=""
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #350d36;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;
const Main = styled.div`
  display: flex;
  margin-right: 16px;
  margin-left: 16px;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 6px;
  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  input:focus {
    outline: none;
  }
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;
const Name = styled.div`
  padding-right: 16px;
`;
const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
