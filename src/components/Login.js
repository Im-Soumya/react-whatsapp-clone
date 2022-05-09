import React, { useState } from 'react';
import styled from "styled-components";
import { Button } from "@mui/material";
import { auth, provider } from '../firebase';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        if (user) {
          navigate("/chats")
        } else {
          console.log("Signin to proceed")
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <Container>
      <LoginContainer>
        <Logo src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png' />
        <Button
          onClick={signIn}
          variant="outlined"
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
  width:  125px;
  height: 125px;
  margin-bottom: 50px;
`;