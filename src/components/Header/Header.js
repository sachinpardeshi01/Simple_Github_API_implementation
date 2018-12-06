//React Libraries
import React, { Component } from 'react'

//Images

//Styles
import "./Header.scss"

export default class Header extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      name:""
    }
  }
  getQuery = (e) =>{
    e.preventDefault();
    this.props.callbackFromParent(this.state.name);
 }


  render() {
    return (
      <div>
        <div className="container-fluid m-auto align-items-center d-flex justify-content-center header">
        <div className="row w-75">
        <div className="w40"> 
        <select className="selectBox">
        <option selected > Select An Option</option>
        <option > Sort By Name</option>
        <option > Sort By Score</option>
        </select>
        </div>
        <div className="w60">
        <div >
          <form>
        <input className="queryBox " type="text" name="query" onChange={(e)=> {this.setState({name:e.target.value})
         this.props.callbackFromParent(this.state.name);
       
      }
   }/>  
        <input type="submit" className="searchIcon" onClick={this.getQuery}  value="&#x1F50D;"></input>
        </form>
        </div>
        </div>

        </div>
      </div> 
      </div>
    )
  }
}
