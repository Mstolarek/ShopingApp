import types from './Lists.types';

const initialstate = {ListTitle: '', content: [], isSelected: false};

const ListReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.RESET_LIST:
      return (state = {ListTitle: '', content: [], isSelected: false});
    case types.CHANGE_NAME:
      return {...state, ListTitle: action.payload};
    case types.ADD_ITEM:
      return {
        ...state,
        content: [
          ...state.content,
          {id: state.content.length, title: action.payload},
        ],
      };
    default:
      return state;
  }
};

export default ListReducer;
