import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={props.SignIn}> Giriş yap </Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          {" "}
          Kayıt ol
        </Button>
      </Menu.Item>
    </div>
  );
}
