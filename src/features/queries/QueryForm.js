import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { querySubmitted } from './queriesSlice';

//React Component for Form UI
//contains controls to query HN API
export const QueryForm = () => {
  //set component state using hook
  const [query, setQuery] = useState('');
  //make available redux store dispatch method, using hook
  const dispatch = useDispatch();
  //update query variable with current contents of input field
  const onQueryChanged = e => setQuery(e.target.value);
  //if query content exists, dispatch action on button click
  const onQuerySubmitted = () => {
    if (query) {
      dispatch(
        querySubmitted({
          query
        })
      )
      //clear state/input control
      setQuery('');
    };
  };

  return (
    <section>
      <h2>Search Hacker News</h2>
      <form>
        <label htmlFor="queryTerm">Search Term:</label>
        <input
          type="text"
          id="queryTerm"
          name="queryTerm"
          value={query}
          onChange={onQueryChanged}
        />
        <button type="button" onClick={onQuerySubmitted}>Search Now</button>
      </form>
    </section>
  );
}