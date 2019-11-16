import React, { Component } from 'react'
import issues from '../issues'
import IssueCard from './IssueCard'

// import axios from 'axios';



export class AllIssues extends Component {
  constructor(){
    super()
    this.state = {
        issues:issues
    }
    this.handleChange = this.handleChange.bind(this)
 
  }




  handleChange(event){
    const {name,value} = event.target
    console.log(value,name)

    function pending(a){
      return !a.completionStatus 
    }
    function completed(a){
      return a.completionStatus 
    }
    function potholes(a){
      return a.type === 'pothole'
    }
    function garbage(a){
      return a.type === 'garbage'
    }
    function safety(a){
      return a.type === 'safety'
    }
    if(value === "all"){
          this.setState({issues:issues})
    }else if(value === "pending" ){
        this.setState({
          issues:issues.filter(pending)
        })
    }else if(value === "completed"){
      this.setState({
        issues:issues.filter(completed)
      })
    }else if( value=== "trending"){
      this.setState({
        issues:issues.sort((a,b)=>(b.upvotes - a.upvotes))
      })
    }else if(value === "potholes"){
      this.setState({
        issues:issues.filter(potholes)
      })
    }else if(value === "garbage"){
      this.setState({
        issues:issues.filter(garbage)
      })
    }else if(value==="safety"){
      this.setState({
        issues:issues.filter(safety)
      })
    }
    }
 
  render() {

    const issue_list = this.state.issues.map(issue=>
        <IssueCard key={issue.id} issue ={issue}/>         
    )
     
    return (

      <div>
        <form className="filterForm" onChange={this.handleChange} >
          <label>All </label>
          <input type="radio" value="all" name="filter" />
          <label>Trending </label>
          <input type="radio" value="trending" name="filter"/> 
          <label>Pending </label>
          <input type="radio" value="pending" name="filter"/>
          <label>Completed </label>
          <input type="radio" value="completed" name="filter"/>
          <label>Potholes </label>
          <input type="radio" value="potholes" name="filter"/>
          <label>Garbage</label>
          <input type="radio" value="garbage" name="filter"/>
          <label>Safety </label>
          <input type="radio" value="safety" name="filter"/>
        </form>
            {issue_list}
      </div>
      
      )
  }
}
export default AllIssues