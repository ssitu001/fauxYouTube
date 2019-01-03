//import actions
import { CHANGE_VIDEO } from '../Actions/search';

const currentVideo = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_VIDEO:
    console.log('yo')
    return action.video || {};
    case `VID_FETCH_SUCCEEDED_CURRENT`:
    return action.vid || {};
  default:
    return state;
  }
};

export default currentVideo;