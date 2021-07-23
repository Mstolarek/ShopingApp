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

export const removeitem = (payload) => {
  return {type: types.REMOVE_ITEM, payload: payload};
};

export const changetaskstatus = (payload) => {
  return {type: types.CHANGE_TASK_STATUS, payload: payload};
};

export const copylist = (payload) => {
  return {type: types.COPY_LIST, payload: payload};
};

export const edittab = (payload) => {
  return {type: types.EDIT_TAB, payload: payload};
};

export const deletetab = (payload) => {
  return {type : types.DELETE_TAB , payload:payload}
}

export const addtohistory = (payload) => {
  return {type : types.ADD_TO_HISTORY , payload:payload}
}