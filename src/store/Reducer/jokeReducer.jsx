import { combineReducers } from 'redux';

const initialState = {
  joke: {
    setup: '',
    delivery: '',
    category: '',
    flags: {}
  },
  error: null
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOKE_SUCCESS':
      return {
        ...state,
        joke: {
          setup: action.payload.setup,
          delivery: action.payload.delivery,
          category: action.payload.category,
          flags: action.payload.flags
        },
        error: null
      };
    case 'FETCH_JOKE_FAILURE':
      return {
        ...state,
        joke: initialState.joke,
        error: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  joke: jokeReducer
});
