import axios from 'axios';

export const fetchJokeSuccess = joke => ({
  type: 'FETCH_JOKE_SUCCESS',
  payload: joke
});

export const fetchJokeFailure = error => ({
  type: 'FETCH_JOKE_FAILURE',
  payload: error
});

export const fetchJoke = () => {
  return async dispatch => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Dark');
      const joke = response.data;
      dispatch(fetchJokeSuccess(joke));
    } catch (error) {
      dispatch(fetchJokeFailure(error.message));
    }
  };
};
