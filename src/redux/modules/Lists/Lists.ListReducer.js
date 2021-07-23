import types from './Lists.types';

const initialstate = {ListTitle: '', content: []};

const ListReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.RESET_LIST:
      return (state = {ListTitle: '', content: []});
    case types.CHANGE_NAME:
      return {...state, ListTitle: action.payload};
    case types.CHANGE_TASK_STATUS:
      return {
        ...state,
        content: state.content.map((obj) => {
          return obj.id === action.payload
            ? {...obj, taskDone: !obj.taskDone}
            : obj;
        }),
      };
    case types.COPY_LIST:
      return {...action.payload}

    case types.ADD_ITEM:
      return {
        ...state,
        content: [
          ...state.content,
          {id: state.content.length, title: action.payload, taskDone: false},
        ],
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        content: state.content.filter((obj) => {
          return obj.id != action.payload;
        }),
      };
    default:
      return state;
  }
};

export default ListReducer;
