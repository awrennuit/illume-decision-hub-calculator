import { combineReducers } from 'redux';

// Store industry information
const industry = (state = [], action) => action.type === `SET_INDUSTRY` ? action.payload : state;
  
export default combineReducers({
  industry,
});