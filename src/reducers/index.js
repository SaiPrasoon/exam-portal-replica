import { combineReducers } from 'redux';
import examDetailsReducer from './examDetailsReducer';

const allReducers = combineReducers({
  examDetailsReducer,
});

export default allReducers;
