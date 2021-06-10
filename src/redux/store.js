import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthReducer from './modules/Auth/Auth.reducer';
import MainListReducer from './modules/Lists/Lists.MainListReducer';
import ListReducer from './modules/Lists/Lists.ListReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  Auth: AuthReducer,
  MainList: MainListReducer,
  List: ListReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
