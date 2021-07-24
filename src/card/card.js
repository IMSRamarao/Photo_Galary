import React,{Component} from "react";
import './card.css'

 const Card=(props)=>{
  return (<div className='card'>
       <img src={`https://robohash.org/${props.robot.id}?set=set2&size=140x140`}/>
      <h1>{props.robot.id}-{props.robot.name}</h1>
  </div>);
}

export default Card;