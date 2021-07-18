import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  // state, state değiştiricek method, inital state
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  function handleSignedOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignedIn() {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {
              // if else block
              isAuthenticated ? (
                <SignedIn SignOut={handleSignedOut} />
              ) : (
                <SignedOut SignIn={handleSignedIn} />
              )
            }
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
