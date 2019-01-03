import { combineReducers } from 'redux';
import currentVideo from './currentVideo';
import videoList from './videoList';

const rootReducer = combineReducers({
  video: currentVideo,
  videoList
});

export default rootReducer;