import React,{ Component } from 'react';
import axios from 'axios';

class Calculate extends Component{
constructor(props){
	super(props)
	this.state = { num1:"", num2: ""}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { num1, num2 } = this.state
	event.preventDefault()
	alert(`
	____Your numbers____\n

	num1 : ${num1}
	num2: ${num2}
	`)
  const numbers = {
    num1: num1,
    num2: num2
  };
  axios.post(`http://localhost:8000/server/calculate?num1=20&num2=10`, {num1, num2}).then(
    res => {
      console.log(res.data);
      alert(res.data);
    }
  )
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		
	
		<div>
		<label htmlFor='num1'>First number</label>
		<input
			name='num1'
			placeholder='Enter first number'
			value={this.state.num1}
			onChange={this.handleChange}
		/>
		</div>

    <div>
		<label htmlFor='num2'>Second number</label>
		<input
			name='num2'
			placeholder='Enter second number'
			value={this.state.num2}
			onChange={this.handleChange}
		/>
		</div>
		

		<div>
		<button>Submit</button>
		</div>
	</form>
	)
}
}

export default Calculate;
