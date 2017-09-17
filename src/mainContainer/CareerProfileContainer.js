import React, {Component} from 'react';
class CareerProfileContainer extends Component {

  constructor(props){
    super(props);
  }

  render()
  {
    return(
      <section className="section summary-section">
          <h2 className="section-title">
              <i className="fa fa-user"></i>
                    Career Profile
          </h2>

          <div className="summary">
              <p>{this.props.careerProfile}</p>
          </div>
      </section>
    );
  }

}
export default CareerProfileContainer;
