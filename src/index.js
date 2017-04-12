import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD8cnEFffTqzazPPy0sACG5waN_FsJnqH4';

//Create new component that produces some html
const App = () => {//const is an ES6 piece of syntax.  Declares a variable who's value never changes
  return (
    <div>
      <SearchBar />
    </div>//JSX (a subset of JS that allows us to write JS that looks like HTML)
  );
}//fat arrow is equivalent to writing function

//Take this component's generated HTML and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
