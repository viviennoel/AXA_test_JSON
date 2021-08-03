import { combineReducers } from 'redux';
import { users } from './data.reducer';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;