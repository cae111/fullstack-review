import React from 'react';

class RepoEntry extends React.Component{
  constructor(props){
    super(props)
    console.log('constructing')
  }
  render() {
    console.log('rendering')
    return(
     <div> {this.props.repo.name}</div>
    )
  }
}

export default RepoEntry;
/* <div>
        {this.props.repo.name}
      </div>*/
