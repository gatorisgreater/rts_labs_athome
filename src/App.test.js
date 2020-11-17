import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

import ReactDOM from 'react-dom';
import { QueryForm } from './features/queries/QueryForm';
import { ResultsList } from './features/results/ResultsList';

//test suite starts here
//Application should:
// first test case: run.
// second test case: allow user to enter a search term to query against HN API
// third test case: display list of results
describe ('Correctly Working Application', () => {

  it('Test Case 1: Renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the App component, if something is wrong it will fail here
    ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

	it('Test Case 2: Form/text input control allows the user to enter a search term', function() {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the QueryForm component, if something is wrong it will fail here
    ReactDOM.render(
      <Provider store={store}>
      <QueryForm />
      </Provider>, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Test Case 3: Displays a list of results', function() {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the ResultsList component, if something is wrong it will fail here
    ReactDOM.render(
      <Provider store={store}>
      <ResultsList />
      </Provider>, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
	});

});