import _  from 'lodash';
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

    this.state = {
       videos: [],
       selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {//fat arrow is equivalent to writing function
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
       });
    });
  }
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>//JSX (a subset of JS that allows us to write JS that looks like HTML)
    );
  }
}

//Take this component's generated HTML and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
