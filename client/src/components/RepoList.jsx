
import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div> 
    {props.repos.map(function(repo,index) {
     return (
     <RepoEntry repo={repo}/>)
    })
    }
    </div>
  </div>
)

export default RepoList;

/*{props.repos.map((repo,index) => {
      <div index={index}>
      <RepoEntry repo ={repo}/>
      </div>
    })
    }* */
