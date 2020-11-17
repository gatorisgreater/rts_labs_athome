import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';

//React Component for List Display UI
export const ResultsList = () => {
    //extracts data from Redux store state using hook
    const queries = useSelector(state => state.queries.queries);

    //set component state using hook
    const [results, setResults] = useState('');

    useEffect(() => {
        //useEffect fires on initial render
        //so only execute this code after the first render
        if(queries.length > 0){
            //query term is pushed to end of array
            //so last array object is current query term
            const queryCurrent = queries[queries.length-1].query;
            //append current query term to query string
            const queryURL = "https://hn.algolia.com/api/v1/search?query="+queryCurrent;
            //fetch data from HN API
            fetch(queryURL)
                .then((res) => {
                    // check if response is ok
                    if (!res.ok) {
                    console.log("An error did occur, let's throw an error.");
                    throw new Error("Something went wrong"); // throw an error
                    }
                    return res; // ok, so just continue
                })
                .then((res) => res.json()) //jsonify the response    
                .then((results) => setResults(results)) // set results component state variable
                .catch((err) => {//there was a problem, alert the user
                    alert("There was a problem.");
                });
        }
    },[queries]); //this array makes useEffect fire only if queries variable changes
    //if results exist, render Results List
    if (results){

        const renderedResults = results.hits.map((result,i) => (
            <article className="results-list-item" key={i}>
            <h3>{result.title}</h3>
            <a href={result.url} target="_blank" rel="noreferrer" >Link</a>
          </article>
        ));        

        return (
            <section className="results-list">
                <h2>Search Results</h2>
                {renderedResults}
            </section>
        )
    };
    //if results variable doesn't exist(initial render), render blank page
    return (
        <section className="results-list">
        </section>
    )       
}