import React from "react";
import styled from "styled-components";
import { auth, Provider } from "../firebase";

function Login({ setUser }) {
  const SignIn = () => {
    auth
      .signInWithPopup(Provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <div>
        <img src="https://wallpapercave.com/wp/wp5492852.jpg" alt="img" />
      </div>
      <Content>
        <SlackImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeiMiN8rAE-p2dsmcb8vGHbqZHJpy6-TxXQ&usqp=CAU" />
        <h1>Sign in for Chat</h1>
        <SignInButton onClick={() => SignIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  // background-color: #cccc;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: fixed;
    opacity: 0.9;
    margin: auto;

    fit-content: cover;
  }
`;
const Content = styled.div`
  background-color: transparent;
  padding: 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  h1 {
    display: inline-block;
    text-align: center;
  }
`;
const SlackImg = styled.img`
  height: 100px;
  background: white;
`;
const SignInButton = styled.button`
  margin-top: 50px;
  background-color:#0a8d48;
  color:white;
  display:inline-block;
  text-align:center;
  border:none;
  height:40px;
  border-radius:5px;
  cursor:pointer;
  font-size:15px
  font-weight:800;
`;
