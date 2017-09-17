import React, {Component} from 'react';
class ProjectsContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
     return (
       <section className="section projects-section">
           <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
           <div className="intro">
               <p>{this.props.projectsIntro}</p>
          </div>
             {this.props.projects.map(project =>
               <div className="item" key={project.projectName.toString()}>
                   <span className="project-title">
                        <a href={project.projectLink} target="_blank">
                            <p>{project.projectName}</p>
                        </a>
                  </span>
                   <span className="project-tagline">
                    <p>{project.projectDescription}</p>
                   </span>
               </div>
             )}
         </section>
     );
  }

}
export default ProjectsContainer;
