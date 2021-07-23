import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthReducer from './modules/Auth/Auth.reducer';
import MainListReducer from './modules/Lists/Lists.MainListReducer';
import ListReducer from './modules/Lists/Lists.ListReducer';
import thunk from 'redux-thunk';
import HistoryListReducer from './modules/Lists/Lists.HisotryListReducer';

const reducers = combineReducers({
  Auth: AuthReducer,
  MainList: MainListReducer,
  History:HistoryListReducer,
  List: ListReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
