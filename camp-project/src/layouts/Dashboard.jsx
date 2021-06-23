import React from "react";
import CartSummary from "./CartSummary";
import Categories from "./Categories";
import ProductList from "./../pages/ProductList";
import Navi from "./Navi";
// rfc + tab
export default function Dashboard() {
  return (
    <div>
      <Navi />
      Ana sayfa <CartSummary />
      <Categories />
      <ProductList />
    </div>
  );
}
