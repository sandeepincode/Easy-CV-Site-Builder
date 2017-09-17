import React, {Component} from 'react';
class LanguagesContainer extends Component {

  constructor(props){
    super(props);
  }

  render()
  {
    return(
        <div className="animated fadeInRightBig">
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                      {this.props.languages.map(language =>
                        <li key={language.language.toString()}>{language.language}
                            <span className="lang-desc">
                                ({language.level})
                            </span>
                        </li>)}
                </ul>
            </div>
        </div>
    );
  }

}
export default LanguagesContainer;
