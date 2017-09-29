import { combineReducers } from 'redux';
import ItemReducer from './reducer-items';
import ActiveItemReducer from './reducer-active-item';

const allReducers = combineReducers({
  items: ItemReducer,
  activeItem: ActiveItemReducer
});

export default allReducers;
