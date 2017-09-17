import React, {Component} from 'react';
class ProfileContainer extends Component {

  constructor(props){
    super(props);
  }

  render()
  {
    return(
      <div className="profile-container">
            <div className="animated fadeInRightBig">
                <img className="profile" src={this.props.image} alt="profileImage" />
                <h1 className="name">{this.props.firstName} {this.props.secondName}</h1>
                <h3 className="tagline">{this.props.title}</h3>
            </div>
        </div>
    );
  }

}
export default ProfileContainer;
