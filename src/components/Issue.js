import React, { Component } from 'react'
import IssueMap from './IssueMap'
import issues from '../issues'
export class Issue extends Component {
    render() {
        const id = this.props.match.params.id;
        function getId(a){
            return a.id === id
        }

        const issue = issues.filter(getId)
        return (
        <div>
                <div >
                    <IssueMap coord={issue[0].coord} />
                </div>
                <div>
                <br/>
                <div className="card mb-3 Larger shadow card-Individual" style={{width:'50%',marginLeft:'24%',marginTop:"15%"}}>
                    <img src={issue[0].img} className="card-img-top" alt="..."/>   
                    <div className="card-body">
                        <h5 className="card-title">{issue[0].title}</h5>
                        <p><i className="fa fa-map-marker"></i>{" "+issue[0].location}</p>
                <p>{issue[0].tags.map(each_tag=>
                    <span key={each_tag.id}className="badge badge-primary">{each_tag.tag}</span>
                  )}
                  </p>

                        <p className="card-text">{issue[0].description}</p>
                        <p className="card-text" style={{display:'inline'}}><small> <i className="fas fa-clock"></i> {issue[0].time}</small></p>
                        <p className="card-text" style={{float:'right'}}><small> <i class="fas fa-arrow-up"></i> {issue[0].upvotes}</small></p>                           

                    </div>
                </div>
            </div>

        </div>
        )

    }
}
export default Issue