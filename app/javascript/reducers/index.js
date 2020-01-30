import { combineReducers } from 'redux';
import links from './links_reducer.js';
import comments from './comments_reducer.js';
import session from './session_reducer.js';
import errors from './errors_reducer.js';

export default combineReducers({
  links,
  comments,
  session,
  errors
});
