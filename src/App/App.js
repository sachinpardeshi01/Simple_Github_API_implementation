import React, { Component } from 'react'
//Components
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards"
import axios from "axios";

//Styles
import "./App.scss"

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      query:"",
      data:[],
      total_count:null,
      repos:[]
    }
  }
   getQuery = (query) => {
   this.setState({query:query},()=>{
    if(this.state.query){
      axios.get(`https://api.github.com/search/users?q=${this.state.query}`)
      .then(res=>{
      this.setState({total_count:res.data.total_count,data:res.data.items},
        ()=> {
          let reposFromApi = [];
          for(let data of this.state.data){

            // axios.get(`https://api.github.com/users/${data.login}/repos?page=1&per_page=2`)
            // .then(res=>{
            //     reposFromApi.push(res.data)
            //     this.setState({repos:reposFromApi});
            // })
            // .catch(err => {console.log(err)})
          }
    


        });
      })

     
   }
  })
}
  render() {
    console.log("this.state",this.state.repos)
    return (
      <div className="App">
        <Header callbackFromParent={this.getQuery}/>
        <Cards data={this.state.data} repos={this.state.repos} total_count={this.state.total_count}></Cards>
      </div>
    )
  }
}
