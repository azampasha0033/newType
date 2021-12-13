import { combineReducers } from 'redux';
import { LoginSlice } from '../features/loginSlice';

export const reducers = combineReducers({
  login: LoginSlice.reducer
});
