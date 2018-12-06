import React, { Component } from 'react'

//Components
import Card from "./Card/Card"


export default class Cards extends Component {

    constructor(props){
        super(props);
    }

  render() {
    let {data,total_count } = this.props;
    let renderCards = data.length == 0 ? "Loading" : data.map((card,i) => {
        return (
            <div className="p-2 container-fluid m-auto align-items-center d-flex justify-content-center ">
        <div className="row w-75">
        <Card key={i} data={card} > </Card>
        </div></div>)
    }) 
    return (
      <div>
           <div className="p-2 container-fluid m-auto align-items-center d-flex justify-content-center ">
        <div className="row w-75">
          <p>Total Count : {total_count}</p></div></div>
        {renderCards}
      </div>
    )
  }
}
