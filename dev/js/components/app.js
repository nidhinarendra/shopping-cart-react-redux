import React from 'react';
import ItemList from '../containers/item-list';
import OrderList from '../containers/order-list';
require('../../scss/style.scss');

const App = () => (
  <div>
    <h1> Food App </h1>
    <h2 id="keep">Menu</h2>
    <h2 id="push">Order</h2>
    <ItemList />
    <OrderList />
  </div>
);

export default App;
