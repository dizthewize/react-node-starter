import { CURRENT_USER } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {

    case CURRENT_USER:
      return action.payload || false;

    default:
      return state;
  }
}