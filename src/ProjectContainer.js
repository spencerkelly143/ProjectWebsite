import React from 'react'
import { withRouter } from 'react-router-dom'
import github from './GitHub.png'
import linkedin from './linkedin.png'
import { api } from './api.js'
import Header from './Header'

class ProjectContainer extends React.Component{
  constructor(props){
    super(props)
    console.log(props.history.location.search.split('?')[1])
    this.state = {
      key: props.history.location.search.split('?')[1]
    }
  }


  render(){
    console.log(api)
    return(
      <div className="container-fluid" style={{minHeight: '100vh', background: api[this.state.key]['colour']}}>
        <div className="row">
        <div className="col-3"></div>
          <div className="col-6">
            <img src={api[this.state.key]['image']} style={{width: '100%'}}/>
          </div>
        </div>
        <div className='row'>
        <div className="col-3"></div>
          <div className="col-6">
          {api[this.state.key]['desc'].split("\n").map((para,key) =>
            <p style={{color: 'white'}} key={key}>{para}</p>
          )}
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectContainer)
