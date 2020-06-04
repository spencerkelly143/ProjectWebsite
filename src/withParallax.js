import React from 'react'

export default function withParallax(WrappedComponent){
  return class extends React.Component{
    constructor(props){
      super(props)
      let scrollTop = window.pageYOffset
      let transformTitle = 1
      if(scrollTop <=280){
        transformTitle = (1500-scrollTop)/1500
      }
      this.state = {
        scrollTop: window.pageYOffset,
        transform: 1,
        transformTitle: transformTitle,
        transform_project_1: 0
      }
    }

    componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount = () => {
      window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (e) => {
      let scrollTop = window.pageYOffset
      let { transformTitle } = this.state
      if(scrollTop <=280){
        transformTitle = (1500-scrollTop)/1500
      }
      this.setState({
        scrollTop: scrollTop,
        transformTitle: transformTitle,
      })}

    render(){
      return <WrappedComponent scrollTop={this.state.scrollTop}
                               transformTitle={this.state.transformTitle}
                                              {...this.props} />
    }
  }
}
