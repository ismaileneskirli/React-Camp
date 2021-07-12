import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";

// rfc tab
export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C5603AQHS4tdJ_q6uTA/profile-displayphoto-shrink_200_200/0/1609596080019?e=1629331200&v=beta&t=d-CcYkWRRCJFt0Kfz45pQW5m96j2WOAlVHauRwQL0_8"
        />
        <Dropdown pointing="top left" text="Enes">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" Icon="info" />
            <Dropdown.Item
              onClick={props.SignOut}
              text="Cıkış Yap"
              Icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
