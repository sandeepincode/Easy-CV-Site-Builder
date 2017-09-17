import React, {Component} from 'react';
class EducationContainer extends Component {

  constructor(props){
    super(props);
  }

  render()
  {
    return(
        <div className="animated fadeInRightBig">
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                {this.props.education.map(edu =>
                  <div className="item" key={edu.fieldOfStudy.toString()}>
                      <h4 className="degree">{edu.fieldOfStudy}</h4>
                      <h5 className="meta">{edu.institute}</h5>
                      <div className="time">{edu.startDate} - {edu.endDate}</div>
                  </div>
                )}
            </div>
        </div>
    );
  }

}
export default EducationContainer;
