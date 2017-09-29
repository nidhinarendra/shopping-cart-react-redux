import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickRemove } from '../actions/remove';
import { destList } from './item-list';

class OrderList extends Component {
  totalPrice() {
    var totalCost;
    var cost = destList.map((item, index) => {
      console.log('Item is: ' + item.item + ' Price is: ' + item.price);
      if (index == 0) {
        totalCost = item.price;
      } else {
        totalCost = totalCost + item.price;
      }
      console.log('The total price is ' + totalCost);
      return <div key={item.id}>{totalCost}</div>;
    });
    return totalCost;
  }

  countQty(item) {
    var totalQty = 0;
    for (var i = 0; i <= destList.length; i++) {
      if (item == destList[i]) {
        console.log('item found');
        totalQty = totalQty + 1;
        return totalQty;
      } else {
        console.log('item not found');
        totalQty = 1;
        return totalQty;
      }
    }
  }

  createOrderList() {
    var temp = destList.map(item => {
      return (
        <div key={item.id} id="eachItem">
          <div id="foodName">
            <div id="food">{item.item}</div>
          </div>
          <div id="priceOfFood">
            <div id="price">${item.price}</div>
          </div>
          <button
            onClick={() => this.props.clickRemove(item, destList)}
            id="button"
          >
            Remove
          </button>
          <div key={item.id}>qty:{this.countQty(item)}</div>
        </div>
      );
    });
    return temp;
  }

  render() {
    if (!this.props.item) {
      console.log('Empty case!!!!!');
      return <div id="orderBlock">Add an item to the cart</div>;
    } else {
      return (
        <div id="orderBlock">
          {this.createOrderList()}
          <div>
            <strong>Total=${this.totalPrice()}</strong>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    item: state.activeItem
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clickRemove: clickRemove
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(OrderList);
