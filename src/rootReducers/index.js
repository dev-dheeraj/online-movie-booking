import { combineReducers } from "redux";

import { latestMovies } from '../components/landingPage/reducers/movies.reducer'
import { eventsList } from '../components/landingPage/reducers/events.reducer'

const rootReducer = combineReducers({
  latestMovies,
  eventsList
});

export default rootReducer;
