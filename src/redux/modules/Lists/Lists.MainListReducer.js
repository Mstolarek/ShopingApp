import types from './Lists.types';

const initialState = [
  {ListId: null, ListTitle: '', content: [], isSelected: false},
];

const MainListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TAB:
      return [
        ...state,
        {
          ListId: state.length,
          ListTitle: action.payload.ListTitle,
          content: action.payload.content,
          isSelected: false,
        },
      ];
    default:
      return state;
  }
};

export default MainListReducer;
