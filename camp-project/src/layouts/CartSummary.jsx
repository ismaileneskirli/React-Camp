import React from "react";
import { Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Product 1 </Dropdown.Item>
          <Dropdown.Item>Product 2</Dropdown.Item>
          <Dropdown.Item>Product 1</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
