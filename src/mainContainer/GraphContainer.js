import React, {Component} from 'react';
class GraphContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
     return (
         <section className="skills-section section">
             <h2 className="section-title">
                <i className="fa fa-rocket"></i>
                Skills &amp; Proficiency
             </h2>
             <div className="skillset">

                   {this.props.graphs.map(graphInfo =>
                     <div className="item" key={graphInfo.language.toString()}>
                     <h3 className="level-title">{graphInfo.language}</h3>
                     <div className="level-bar">
                         <div className="level-bar-inner" data-level={graphInfo.knowledgeLevel}>
                         </div>
                     </div>
                     </div>
                   )}

             </div>
         </section>
     );
  }

}
export default GraphContainer;
