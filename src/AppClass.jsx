
import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  constructor(props){
    super()
    this.props
  }
  render(){
    const imgData = this.props.myData();
    return(
      <div>
        <div><h1> Kalvium gallary</h1></div>
      <div className='image'>
        {imgData.map((item)=>{
          return <img key={item.id} src={item.img}/>
        })}
      </div>
      </div>
    )
  }
}