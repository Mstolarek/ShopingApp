import types from './Lists.types'

const initialState = []

const HistoryListReducer = (state = initialState , action) => {
switch (action.type) {
    case types.ADD_TO_HISTORY : return [...state ,action.payload]
    default : return state
}
}

export default HistoryListReducer