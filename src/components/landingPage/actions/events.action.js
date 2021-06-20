import { eventsConstants } from "../constants/events.constant";
import { eventsServices } from "../services/events.service";

export const eventsActions = {
    getNearByEvents
};

function getNearByEvents() {
  return (dispatch) => {
    try {
      eventsServices
        .getNearByEvents()
        .then((response) => {
          if(response && response.data){
            dispatch(success(response.data));
          }else{
            dispatch(failure('Sometihng went wrong'));
          }
        })
        .catch((error) => {
          dispatch(failure(error));
        });
    } catch (error) {}
  };

  function request() {
    return { type: eventsConstants.GET_EVENTS_REQ };
  }
  function success(events_list) {
    return { type: eventsConstants.GET_EVENTS_SUCC, events_list };
  }
  function failure(events_list_error) {
    return { type: eventsConstants.GET_EVENTS_FAIL, events_list_error };
  }
}

