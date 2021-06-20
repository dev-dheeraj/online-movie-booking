import { eventsConstants } from "../constants/events.constant";

export const eventsList = (state = {}, action) => {
  switch (action.type) {
    case eventsConstants.GET_EVENTS_REQ:
      return {
        loading: true,
      };
    case eventsConstants.GET_EVENTS_SUCC:
      return {
        events_list: action.events_list,
        loading: false,
      };
    case eventsConstants.GET_EVENTS_FAIL:
      return {
        error: action.events_list_error,
        loading: false,
      };

    default:
      return state;
      break;
  }
};
