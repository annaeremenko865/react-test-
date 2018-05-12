import React from 'react';
import {SelectTodo} from './SelectTodo';
import {Select} from './Select';


export class SelectList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
			{text: 'Twin', num: '22'},
			{text: 'Tripple', num: '12'},
			{text: 'Quardo', num: '4'}
			] 
		}
	
	}

	

	addTask = (text, num) => this.setState({
		tasks: [...this.state.tasks, {text: text, num: num}]
	})

	deleteTodoItem = (idx) => {
		let filtered = this.state.tasks.filter(
			(task, i) =>
			idx !== i );
		this.setState( {
			tasks: filtered
		});
	}

	render(){
		let tasks = this.state.tasks.map(
		  	(obj, idx) => <SelectTodo key = {idx} id = {idx} data = {obj}
		  	askForDelete= { this.deleteTodoItem }/>
		  	); 
		return (
		<div>
		  <ul>
		  
		   { tasks }
		  
		  </ul>
		  {/*<Select />*/}
		  <button className = "add" onClick = { () => console.log('add') }>Добавить</button><br/>
		  <button className = "save" onClick = {() => console.log('save') }>Сохранить</button>
		  <button className = "cancel" onClick = { () => console.log('del') }>Отмена</button>
		 

		</div>

	)	
	}
}