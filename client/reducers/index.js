import { combineReducers } from 'redux';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
