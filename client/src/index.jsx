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
      .done((response)   => {
        //console.log('fromclient post  ' +  JSON.stringify(response))
        this.fetch();
      });
      
  }
  componentDidMount() {
    this.fetch();
}

fetch(){
  let repos;
  $.ajax({
    method: 'GET',
    url: "/repos",
    dataType:"json",
  }).done(function(response) {
      console.log('from client post  ' +  JSON.stringify(response))
      console.log( "from fetch " + response); 
     repos = response

  });
  this.setState({
    repos: repos
  });  
}
/*
     getGroceries() {
    axios.get('/groceries')
      .then((response) => {
        this.setState({
          groceries: response.data
        })
      });
  }
*/
  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
