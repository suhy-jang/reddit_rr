import axios from 'axios';
import {
  READ_LINK,
  READ_SESSION,
  EXCEPTION_ERROR
} from '../common/variables';

export const readLink = (id) => async (dispatch) => {
  return await axios.get(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('no link data');
      if (!data.link) throw new Error(data.errors[0] || 'fail at loading link');
      return data.link;
    })
    .then(payload => dispatch({ type: READ_LINK, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}

export const readSession = () => async (dispatch) => {
  return await axios.get('/logged_in', { withCredentials: true})
    .then(({ data }) => {
      if (!data) throw new Error('Wrong info');
      if (data.logged_in) dispatch({ type: READ_SESSION, payload: data.user });
      else dispatch({ type: READ_SESSION, payload: '' })
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}
