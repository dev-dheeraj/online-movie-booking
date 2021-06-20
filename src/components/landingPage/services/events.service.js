import { post, get } from "../../../api/api";

function getNearByEvents() {
  // try {
  return get("/events", )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });

}



export const eventsServices = {
getNearByEvents,
};
