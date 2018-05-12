import React, { Component } from 'react';
import { SelectList } from './components/SelectList';



class App extends Component {

render() {
	
  return (
	<div className = "container">
	 <h4>Структура номеров</h4>
	 <SelectList/>
    </div>
  );  
  }
}



// class App extends Component {
//   constructor(props){
// 	super(props);
// 	this.state = {showHello: true};
	
//   }


// render() {
//   let text = 'Hello';
//   let color = 'red';
//   if (this.state.showHello){
//   	text = 'bye';
//     color = 'green';
//    }

// 	return (
// 	<h1
// 	onClick={()=>this.setState({showHello: !this.state.showHello})}
// 	style = {{color:color}}>{text}</h1>
// 	);  
//   }
// }



// class App extends Component {
//   constructor(props){
// 	super(props);
// 	this.names = ['Vasja', 'Petja', 'Galja'];
//   }
// generateList () {
//   return this.names.map(
//    	 	(item, idx) => 
//    	 	<h1 key = {idx}>{ item }</h1>
//    	 	) ;
// }
//   render() {
//   return (
//    	<div className = "container">
//    	 { this.generateList() }
//    	</div>
//   	);
//   }
// }


// class App extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			text: ['Twin', 'Tripple', 'Quardo'],
// 		}
		// this.state = {
		// 	val: 'Quardo',
		// 	value: 0,
		// 	remove: 'false'
		// };
	// }
 // render() {
 // 	   	return (
  			{/*<div className = "container">
  			<select value = {this.state.text} onChange = { event=> this.setState({text: event.target.value}) }>
  			<option>{ this.state.text }</option>
  			{/*<option >Tripple</option>
  			<option >Quardo</option>*/}
  			{/*</select>
  			<input type = "number" value = {this.state.value} onChange = {  event=> this.setState({value: event.target.value} ) }/>
  			<button onClick={ ()=> this.setState({remove: !this.state.remove}) }> X </button>
  			 <input type = "checkbox" checked = {this.state.disabled} onClick = { ()=>this.setState( {disabled: !this.state.disabled} ) }/>
  			</div>
  		{/*);
  }
}*/}
{/**/}

export default App;

