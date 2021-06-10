import types from './Lists.types';

export const addtab = (payload) => {
  return {type: types.ADD_TAB, payload: payload};
};

export const additem = (payload) => {
  return {type: types.ADD_ITEM, payload: payload};
};

export const changename = (payload) => {
  return {type: types.CHANGE_NAME, payload: payload};
};

export const resetlist = () => {
  return {type: types.RESET_LIST};
};
