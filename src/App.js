import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './card-list/card-list'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      robots:[
        {id:11,name:'A1'},
        {id:21,name:'A2'},
        {id:31,name:'A3'},
        {id:41,name:'A4'},
        {id:51,name:'A5'},
        {id:61,name:'A6'}
      ],
      searchData:''
    }
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then((resp)=>resp.json()).
    then((data)=>this.setState({robots:data}))
  }
  
  handleSearch=(event)=>{
      this.setState({searchData:event.target.value})
  }
  render() {
    const filteredRobos=this.state.robots.filter(m=>m.name.toLowerCase()
    .includes(this.state.searchData.toLowerCase()));
    return (
      <div className="App">
        <input type='text' name='search'  onChange={this.handleSearch}/>
        {this.state.searchData}
        <br/>
        <br/>
        <br/>
        <CardList robots={filteredRobos}/>
         </div>
    );
  }
  
}


export default App;
