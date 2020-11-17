import { configureStore } from '@reduxjs/toolkit';
import queriesReducer from '../features/queries/queriesSlice';

//creates Redux store instance
//requires passing in of a reducer argument, in this case queriesReducer
export default configureStore({
  reducer: {
    queries: queriesReducer
  },
});
