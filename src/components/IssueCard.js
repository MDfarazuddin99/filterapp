import React, { Component } from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";



export class IssueCard extends Component {
    render() {
        return (
          <Router>
            <div className="card mb-3 issueCard shadow p-3 mb-5  rounded">
        
            <div className="row no-gutters">
             
              <div className="col-md-4">
             
                <img src={this.props.issue.img} className="card-img" alt="..."/>
             
              </div>
              <div className="col-md-8">
             
                <div className="card-body">
                  <h5 className="card-title">{this.props.issue.title}</h5>
               
                  <p><i className="fa fa-map-marker"></i>{" "+this.props.issue.location}</p>

                  <p>{this.props.issue.tags.map(each_tag=>
                    <span className="badge badge-primary">{each_tag.tag}</span>
                  )}</p>


                  <p className="card-text">{this.props.issue.description.slice(0,250)}. . .
                  <a  href={`/issue/${this.props.issue.id}`}> Read more </a></p>
               
                  <p className="card-text" style={{display:'inline'}}><small> <i className="fas fa-clock"></i> {this.props.issue.time}</small></p>
                  <p className="card-text" style={{float:'right'}}><small> <i class="fas fa-arrow-up"></i> {this.props.issue.upvotes}</small></p>                           
                </div>
             
              </div>
            </div>
          </div>  
          </Router>          
        )
    }
}




export default IssueCard
