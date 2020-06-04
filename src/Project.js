import React from 'react'
import withParallax from './withParallax'
import { Link } from 'react-router-dom'

class Project extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projectSelected: null,
      projects: [{"name": "Innoventure", "colour": '#93B5C6', "field": "Business", 'desc': "A platform designed to connect small and medium sized canadian enterprises with international investors."},
                {"name": "Possible Made Here", "colour": '#F18805', "field": "Business", "desc": "An award-winning platform comprised of AI-enabled tools aimed at attracting people to move to the city of Kingston."},
                {"name": "Bose Gesture Control", "colour": '#08605F', "field": "Personal", "desc": "An android application that connects with compatible Bose headphones and allows hands-free music playback controls."},
                {"name": "Covid-19 Scraper", "colour": '#EE6055', "field": "Business", "desc": "A website scraper that collects and compiles cross-faculty information about Covid-19 action plans."},
                {"name": "Clique Videochat", "colour": '#93B5C6', "field": "Personal", "desc": "A video chatting website that emulates different social situations by changing the chat configurations."},
                {"name": "Houston", "colour": '#EE6055', "field": "Personal","desc": "A full length EP completely mixed and mastered on an Iphone. It was also my first full project in the music industry."}
                ],
      box0: false,
      box1: false,
      box2: false,
      box3: false,
      box4: false,
      box5: false,
      box6: false,
    }
  }

  projectClicked = (e) => {
    this.setState({
      [`box${e.target.value}`]: !this.state[`box${e.target.value}`]
    }, () => console.log(this.state))
  }

  render(){
    let { scrollTop } = this.props
    let { projectSelected } = this.state
    return(
      <div className="container-fluid second">
        <div className='row ml-5 ' style={{transform: 'translateY('+ scrollTop*0.18 + 'px)'}}>
          <div className="col-4">
            <h1 className="project-title" id="bottom">Projects</h1>
          </div>
        </div>
        <div className="row ml-5 mr-5 mb-5" style={{transform: 'translateY('+ scrollTop*0.25 + 'px)'}}>
            {this.state.projects.map((project,key) =>
              <div className='col-4' style={{marginBottom: '25px'}}>
                <div className={this.state[`box${key}`] ? "card shadow project-rectangle clicked" : "card shadow project-rectangle"}>
                  <div className="card-header" style={{background: project.colour, color: 'white', fontWeight: "bold",
                                                      fontSize: '1.25rem'}}>{project.name}
                  <div style={{background: project.colour, color: 'rgba(255,255,242, 0.7)',
                                                      fontSize: '0.95rem', position: 'absolute', top: '18px', right: '10px'}}>
                    {project.field}
                  </div>
                </div>
                  <div className="card-body" style={{background: project.colour}}>
                    <div className="card-text" style={{color: 'white'}}>
                      {project.desc}
                      <br />
                      <Link style={{color: "white"}} to={`/project?${key}`}>Learn more</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='row'>
            <div className="col-12">
              <h3 className="greeting" style={{transform: 'translateY('+ scrollTop*0.17 + 'px)'}}>I look forward to <a style={{color: 'black'}} href="kelly.spencer@queensu.ca">hearing</a> from you!</h3>
            </div>
          </div>
        </div>
    )
  }
}

export default withParallax(Project)

// {/*<div className={`project-rectangle shadow`} id={`project-${key}`} style={{ transform: 'translateX('+key*125+'%)'}}
//     onClick={() => this.handleClick(key)}>
//   <h3 className={`text ${this.state[key]}`}>{project.name}</h3>
//   <p className={`description ${this.state[key]}`}>ABDSA ADJFa fKFAsf KFASdfj FSDANFaf FMAKFg NFSAJf AJFAsDfj fnfnf fnfnf</p>
// </div>*/}
