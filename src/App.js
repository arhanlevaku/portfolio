import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";
//import PROJECTS from "./data/projects";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

/* class RegularClass{};
class ComponentClass extends Component {};

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance); */

class App extends Component {

    constructor() {
        super();
        this.state = { displayBio : false}
        console.log('Compoenent this', this);

       // this.readMore = this.readMore.bind(this);
       // this.showLess = this.showLess.bind(this);
       this.toggelDisplayBio = this.toggelDisplayBio.bind(this);
    } 

    /* readMore() {

        this.setState({displayBio : true})
        console.log(' read more', this);
    }

    showLess() {
        this.setState({displayBio : false});
    } */

    toggelDisplayBio(){

        this.setState({displayBio : !this.state.displayBio})
    }
    render() {

        
        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Gopu, the Awesome and I'm a cool kid</p>
                {
                this.state.displayBio ? 
                (
                 <div>
                <p>I live in Romansville, PA</p>
                <p>I go to DMS</p>
                <p>Besides coding, I love Baseball</p>
                <button onClick={this.toggelDisplayBio }> show less</button>
                </div> ) : (
                    <div>
                        <button onClick={this.toggelDisplayBio }>Read more</button>
                    </div>
                )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }

}

export default App;