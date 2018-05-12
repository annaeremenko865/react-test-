import React from 'react';

export class  Select extends React.Component{
 
  render (){

let inp;

    return (
	<div>
		<select>
		<option>Twin</option>
		<option >Tripple</option>
		<option>Quardo</option>
		</select>
		<input type = "number"  ref = { el => inp = el }/> 
		
	</div>
 	)
  };
};
