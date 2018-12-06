import React, { Component } from 'react'

//Components
import {Collapse,Well,Table } from "react-bootstrap";
import axios from "axios";

import "./Card.scss";

export default class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            isCollapsed:false,repos:[]
        }
    }

    componentDidMount(){
    }
  render() {
     console.log()
    return (
      <div className=" d-flex customCard p-2 w-100 ">
        <div className="w-25 center">
          <img src={this.props.data.avatar_url} className="img"/>
      </div>
      <div className="w-75">
      <h3>{this.props.data.login}</h3>
      <p className="lead pb-1">Profile URL : <a href={this.props.data.url}>{this.props.data.url}</a></p>
      <div className="d-flex align-items-end">
      <div className="w-75">
      <p className="m-0">Repos URL : <a href={this.props.data.repos_url}>{this.props.data.repos_url}</a></p>
      <p className="m-0">Follower's URL : <a href={this.props.data.followers_url}>{this.props.data.followers_url}</a></p>
      </div>
      <div className="w-25">
      <button className="btn  btn-outline-primary" type="button" onClick={()=>{this.setState({isCollapsed:!this.state.isCollapsed})}}>{this.state.isCollapsed ? "Details" : "Collapse  "}</button>
      </div>
      </div>
      <div>
      <Collapse in={this.state.isCollapsed}>
          <div>
            <Well>
             <Table striped condensed hover>
             <tbody>
             <tr>
               <td>Type</td>
               <td>{this.props.data.type}</td>
             </tr>
             <tr>
               <td>Score</td>
               <td>{this.props.data.score}</td>
             </tr>
             </tbody>
             </Table>
            </Well>
          </div>
        </Collapse>
        </div>
      </div> 
      </div> 
    )
  }
}
