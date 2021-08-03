import { dataConstants } from '../constants';

export function data(state = {}, action) {
  switch (action.type) {

    //Update data
    case dataConstants.UPDATE_REQUEST:
      // add 'changing:true' property to data being modified
      return {
          changing: true
      };
  case dataConstants.UPDATE_SUCCESS:
      // modify state of data
      return {
          items: action.displayed
      };
  case dataConstants.UPDATE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to data 
      return { data, changingError: action.error }

      
    default:
      return state
  }
}

