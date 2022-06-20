import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render(){
        const { title, image, description, link } = this.props.project;

        return(
            <div style={{ display: 'inline-block', width: 500, margin: 25}}>
            <h3>{title}</h3>
            <img src={image} alt='project-img' style={{width: 450, height: 325}} />
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer noopener"><button className='btn'>Link</button></a>
            </div>
        )
    }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => {
                    return(
                        <Project key={PROJECT.id} project={PROJECT}/>
                    )
                })
            }
        </div>
      </div>
    )
  }
}

export default Projects;