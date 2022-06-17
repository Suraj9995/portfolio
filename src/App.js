import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfile from "./SocialProfiles";
import profile from './assets/ProfileImg.jpg'

class App extends Component{
    state = { displayBio: false};
    
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    
    render(){
        return(
            <div>
                <div className="Banner">
                    <img className="Main-Profile-img" src={profile} alt='Main-profileimg' />
                
                <h1 className="Main-Header">Hello</h1>
                <p>My Name is Suraj. I'm a Front-End Developer</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                        <p>I live in Pune.</p>
                        <p>I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking<br/> 
                            an entry-level position with Company to use my skills in coding, troubleshooting complex problems,<br/>
                            and assisting in the timely completion of projects.</p>
                            <button className="btn" onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ) : (
                        <div>
                            <button className="btn" onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                </div>
                <hr />
                <Projects />
                <hr />
                <SocialProfile />
            </div>
        )
    }
}

export default App;
