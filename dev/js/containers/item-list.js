import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
require('../../scss/style.scss');
import { clickAdd } from '../actions/add';

export var destList = new Array();

class ItemList extends Component {
  createListItems() {
    return this.props.items.map(item => {
      return (
        <div key={item.id} id="eachItem">
          <div id="foodName">
            <div id="food">{item.item}</div>
          </div>
          <div id="priceOfFood">
            <div id="price">${item.price}</div>
          </div>
          <button
            onClick={() => this.props.clickAdd(item, destList)}
            id="button"
          >
            Add
          </button>
        </div>
      );
    });
  }

  render() {
    return <div id="mainBlock">{this.createListItems()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clickAdd: clickAdd
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);
