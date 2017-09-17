import React, { Component } from 'react';
import userDetails from './userInfo.json';
import ProfileContainer from './sideContainer/ProfileContainer';
import ContactContainer from './sideContainer/ContactContainer';
import EducationContainer from './sideContainer/EducationContainer';
import LanguagesContainer from './sideContainer/LanguagesContainer';
import InterestsContainer from './sideContainer/InterestsContainer';
import CareerProfileContainer from './mainContainer/CareerProfileContainer';
import ExperiencesContainer from './mainContainer/ExperiencesContainer';
import ProjectsContainer from './mainContainer/ProjectsContainer';
import GraphContainer from './mainContainer/GraphContainer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = userDetails;
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
            <div className="sidebar-wrapper">
                <ProfileContainer
                firstName={this.state.firstName}
                secondName={this.state.secondName}
                title={this.state.title}
                image={this.state.image}
                />
                <ContactContainer links={this.state.links}/>
                <EducationContainer education={this.state.education}/>
                <LanguagesContainer languages={this.state.languages}/>
                <InterestsContainer interests={this.state.interests}/>
            </div>

            <div className="main-wrapper">
                <div className="animated fadeIn">
                <CareerProfileContainer careerProfile={this.state.careerProfile}/>
                <ExperiencesContainer experiences={this.state.experiences}/>
                <ProjectsContainer projects={this.state.projects} projectsIntro={this.state.projectsIntro}/>
                <GraphContainer graphs={this.state.graphs}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
