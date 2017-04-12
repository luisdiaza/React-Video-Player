import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD8cnEFffTqzazPPy0sACG5waN_FsJnqH4';//const is an ES6 piece of syntax.  Declares a variable who's value never changes

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {//fat arrow is equivalent to writing function
      this.setState({ videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video = {this.state.videos[0]}/>
        <VideoList videos = {this.state.videos}/>
      </div>//JSX (a subset of JS that allows us to write JS that looks like HTML)
    );
  }
}

//Take this component's generated HTML and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
