import React, {Component} from 'react';
class InterestsContainer extends Component {

  constructor(props){
    super(props);
  }

  render()
  {

    return(
      <div className="animated fadeInRightBig">
        <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
          {this.props.interests.map(interest => <li key={interest.toString()}> {interest} </li>)}
            </ul>
        </div>
      </div>
    );
  }

}
export default InterestsContainer;
