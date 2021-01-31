import React from "react";
import  "./App.css";
class App extends React.Component{
  constructor(props){
    super(props);
    // console.log('constructor call')
    this.state={ Arry:[],};
  }
  componentDidMount(){
    // console.log('componentDidMount call')
    let url ="https://jsonplaceholder.typicode.com/users";
    fetch(url).then((response)=>{
      return response.json();
    })
    .then((result)=>{
      console.log(result);
      let copyArry=result;
      this.setState({
        Arry:copyArry,
      },()=>{
        console.log('State data:',this.state.Arry)
      })
    })
  }
  componentDidUpdate(){
    // console.log('componentDidUpdate call')
  }
  handleclick=()=>{
    this.setState({num:this.state.num+1})
  }
  render(){
    return(
      <div class="container">
        {/* {console.log('render call')}
        <button onClick={this.handleclick}>Press</button>
        <p>Count Number:{this.state.num}</p> */}
        
        {this.state.Arry.map((Item,Index)=>{
          return <div key={Index} class="item">
            <p class="itemvalue">Name: {Item.name}</p>
            <p class="itemvalue">Id: {Item.id}</p>
            <p class="itemvalue"> Email: {Item.email}</p>
            <p class="itemvalue">Phone: {Item.phone}</p>
            <p class="itemvalue">Website: {Item.website}</p>
            </div>
        })}
      </div>
    )
  }
}
export default App;
