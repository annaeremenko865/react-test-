import React from 'react';

export class SelectTodo extends React.Component{
	
	
	remove = () => this.props.askForDelete(this.props.id);
	

	render(){

	  return (

	  	<li>
		
	  	  {this.props.data.text}
	  	  <input type = "number" value = {this.props.data.num} 
	  	  onChange = {  event=> this.setState({num: event.target.value} ) }/> 
	  	  <button className = "del" onClick = {this.remove}> x </button>
	  	</li>
/*<AddTodo/>*/
	  	)
		
	}
}

// const AddTodo = props =>{
//  let inp;

//  return (
// 	<div>
// 		<input type = "number" ref = { el => inp = el  }/>
// 		{/*<button className = "add" onClick = { () => {props.onAddingTask(inp.value); inp.value = ''} }>Add</button>*/}
// 	</div>
//  );
// };