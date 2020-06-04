import React from 'react'
import withParallax from './withParallax'
import arrow from './arrow.png'
import myAvatar from './myAvatar.svg'
import github from './GitHub.png'
import linkedin from './linkedin.png'
import { View } from 'react';
import Header from './Header'

class Home extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      opacity: 1
    }
  }
  //
  // componentDidMount = () => {
  //   window.addEventListener('scroll', this.handleScroll)
  // }
  // componentWillUnmount = () => {
  //   window.addEventListener('scroll', this.handleScroll)
  // }
  //
  // handleScroll = (e) => {
  //   console.log(window.pageYOffset)
  //   let scrollTop = window.pageYOffset
  //   console.log(scrollTop)
  //   let { transformTitle } = this.state
  //   if(scrollTop <=280){
  //     transformTitle = (1500-scrollTop)/1500
  //   }
  //
  //   this.setState({
  //     scrollTop: scrollTop,
  //     transform: scrollTop*0.2 +'px',
  //     transformTitle: transformTitle,
  //     transform_project_1: scrollTop*0.15+'px'
  //   })
  // }
  render(){
    let { scrollTop, transformTitle } = this.props
    return(
      <div className="container-fluid top">
        <Header />
        <div className="row">
          <div className='col-5'>
            <h5 className="description1">I'm a full-stack web developer 💻 studying Applied Mathematics at Queen's University 🎓. I'm excited to <a style={{color: '#f18805'}} href="mailto:kelly.spencer@queensu.ca">hear</a> ☎️ from you!</h5>
          </div>
          <div className="col-7">
            <img className="shadow" src={myAvatar}
              style={{ width: "50%", borderRadius: '100%', marginLeft: "200px", transform: 'translateY(' + scrollTop*0.2 +'px)'}} />
          </div>
        </div>
        <svg style={{position: 'absolute', bottom: '0', left: 0, width:"100%", zIndex: '0'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
          <path fill="#FFC759" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,154.7C672,181,768,235,864,229.3C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#FFC759" fill-opacity="0.5" d="M0,64L48,106.7C96,149,192,235,288,277.3C384,320,480,320,576,298.7C672,277,768,235,864,186.7C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="row" style={{marginTop: '100px'}}>
          <div className="col-6">
            <a href="#bottom"><img className='float-right' src={arrow} style={{width: '5%', zIndex: '3'}}/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default withParallax(Home)
