import React, {Component} from 'react';
import SongList from '../components/SongList.js';
import Header from '../components/Header.js'

class SongContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const songsData = JSON.parse(request.responseText);
      this.setState({songs: songsData.feed.entry});
    })
    request.send();
  }

  render(){
    return (
      <div>
        <h1>
          <Header />
          <SongList songs={this.state.songs} />
        </h1>
      </div>
    )
  }
}

export default SongContainer;
