import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched ` +  typeof term);

    $.ajax({
      method: "POST",
      url: "/repos",
      dataType:"json",
      data: { userName: term }
    })
      .done(function( response) {
        //console.log('from client post  ' +  JSON.stringify(response))
        console.log( "Data Saved: " + response.userName);
      });
      
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
