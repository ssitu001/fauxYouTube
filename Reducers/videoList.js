import { CHANGE_VIDEO_LIST } from '../Actions/search';

const videoList = (state = [], action) => {
  switch (action.type) {
    case CHANGE_VIDEO_LIST:
     return action.payload;
    case 'VID_FETCH_SUCCEEDED':
    console.log('VID_FETCH_SUCCEEDED', action.vids)
      return [...state, ...action.vids];
    case 'VID_FETCH_FAILED':
    console.log('VID_FETCH_FAILED', action.message)
      return action.message;
  default:
    return state;
  }
};

export default videoList;