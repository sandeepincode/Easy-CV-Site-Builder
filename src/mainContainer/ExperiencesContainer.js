import React, {Component} from 'react';
class ExperiencesContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
     return (
       <section className="section experiences-section">
           <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>
               <div>
               {this.props.experiences.map(exp =>
                  <div className="item"  key={exp.title.toString()}>
                      <div className="meta">
                          <div className="upper-row">
                              <h3 className="job-title">{exp.title}</h3>
                              <div className="time">{exp.startDate.month} {exp.startDate.year} - {exp.endDate.month} {exp.endDate.year}</div>
                          </div>
                          <div className="company">{exp.company}, {exp.location}</div>
                      </div>
                      <div className="details">
                          <p>{exp.description}</p>
                      </div>
                  </div>
               )}
               </div>
         </section>
     );
  }

}
export default ExperiencesContainer;
