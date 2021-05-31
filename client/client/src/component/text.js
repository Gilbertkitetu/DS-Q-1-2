//import axios
import axios from 'axios';
const React = require('react');



class Text extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('A text was submitted: ' + this.state.value);
      
      
      
      const text = {
        text: this.state.value
      };

      //send post
      axios.post(`http://localhost:8000/server/hello`,  {text}).then(
        res => {
          console.log(res);
          console.log(res.data.text);
          alert(`The server send: ${res.data.text}`);
        }
      )
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Type Here:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Text; 