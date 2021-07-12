import React from "react";
import CartSummary from "./CartSummary";
import Categories from "./Categories";
import ProductList from "./../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "./../pages/ProductDetail";
import CartDetail from "./../pages/CartDetail";
// rfc + tab
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route exact path="/cart" component={CartDetail} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
