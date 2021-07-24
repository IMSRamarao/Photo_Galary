
import React,{Component} from "react";
import './card-list.css'
import Card from '../card/card'

const CardList=(props)=>{
 console.log(props); //to know what is props
return (<div className='card-list'>
     { props.robots.map((rb,index)=><Card robot={rb}/>)}  
    
    </div>);
}


export default CardList;