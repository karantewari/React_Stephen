// Create a new coponent.This should produce some HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyDfafs4LH30NTDIfSKkbnxJhaA3sykWOqk";



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : []
        };
        YTSearch({key:API_KEY,term:'wwe'}, (videos) => {
            this.setState({videos:videos});
        });
    }
 
    render() {
    return(
        <div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>
    )
} 
}
// Take this component's generated HTML and put it on the page
ReactDOM.render(<App/>, document.querySelector('.container'));