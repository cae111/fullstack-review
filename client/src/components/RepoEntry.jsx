import React from 'react';

class RepoEntry extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
    <div>
     <div>Name: {this.props.repo.name}</div>
      <div>
      </div>
     <div>Description: {this.props.repo.description}</div>
      <div>
      </div>
    </div>
    )
  }
}

export default RepoEntry;
