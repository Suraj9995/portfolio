import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render(){
        const { title, image, description, link } = this.props.project;

        return(
            <div style={{ display: 'inline-block', width: 500, margin: 15}}>
            <h3>{title}</h3>
            <img src={image} alt='project-img' style={{width: 400, height: 280}} />
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer noopener">{link}</a>
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