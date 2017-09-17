import React, {Component} from 'react';
class ContactContainer extends Component {

  constructor(props){
    super(props);
  }

  render()
  {
    return(
        <div className="animated fadeInRightBig">
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i>
                          <a>{this.props.links.mail}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i>
                          <a>{this.props.links.mobileNumber}</a></li>
                    <li className="website"><i className="fa fa-globe"></i>
                          <a target="_blank">{this.props.links.site}</a></li>
                    <li className="linkedin"><i className="fa fa-linkedin"></i>
                          <a href="#" target="_blank">{this.props.links.linkedIn}</a></li>
                    <li className="github"><i className="fa fa-github"></i>
                          <a href="#" target="_blank">{this.props.links.github[0]}</a></li>
                    <li className="twitter"><i className="fa fa-twitter"></i>
                          <a target="_blank">@{this.props.links.twitter}</a></li>
                </ul>
            </div>
        </div>
    );
  }

}
export default ContactContainer;
