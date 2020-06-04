import React from 'react'
import github from './GitHub.png'
import linkedin from './linkedin.png'
import withParallax from './withParallax'

function Header(props){
  let { scrollTop, transformTitle } = props
  return(
    <div className="row" style={{paddingTop: "100px"}}>
      <div className="col-4">
          <h1 className="float-left main-title fixed-title"
              style={{transform: 'scale(' + transformTitle + ')'}} id="title">Spencer Kelly</h1>
      </div>
      <div className='col-4'></div>
      <div className="col-4">
        <nav className="header">
          <a className="link" href="#">Resume</a>
          <a className="link" href="mailto:kelly.spencer@queensu.ca">Contact</a>
          <a href="https://github.com/spencerkelly143/"><img className="link" src={github}/></a>
          <a href="https://www.linkedin.com/in/spencer-e-kelly/"><img className="link" src={linkedin}/></a>
        </nav>
      </div>
    </div>
  )
}

export default withParallax(Header)
