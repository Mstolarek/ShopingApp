import types from './Lists.types';

// type ListItemType = {ListId: number, ListTitle: string', content: string[], isSelected: boolean},

const initialState /*:ListItemType[] */ = [
  // {ListId: null, ListTitle: '', content: [], isSelected: false},
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
    case types.EDIT_TAB:
      return [
        ...state.map((obj) => {
          return obj.ListId === action.payload.ListId
            ? {
                ListId: action.payload.ListId,
                ListTitle: action.payload.ListTitle,
                content: action.payload.content,
                isSelected: false,
              }
            : obj;
        }),
      ];
    case types.DELETE_TAB:
      return [
        ...state.filter((obj) => {
          return obj.ListId !== action.payload;
        }),
      ];
    default:
      return state;
  }
};

export default MainListReducer;
