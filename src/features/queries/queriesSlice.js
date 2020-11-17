import { createSlice } from '@reduxjs/toolkit';
//Redux Toolkit createSlice takes care of the work of:
// generating action type strings,
// action creator functions, and 
// action objects. 

const initialState = {
    queries: []
}
//Redux logic for the queries feature.
const queriesSlice = createSlice({
    //All you have to do is: 
    //define a name for this slice,
    //pass in the initial state value, and
    //write an object that has some reducer functions in it.
    //It generates the corresponding action code automatically. 
    name: 'queries',
    initialState,
    reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      querySubmitted: {
        reducer(state, action) {
          state.queries.push(action.payload)
        }
      },
    }
  })
  
export const { querySubmitted } = queriesSlice.actions
  
export default queriesSlice.reducer