import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          inter:0,
          ID: '',
          Name: '',
          username : '',
          Email: ''
        };
        
this.updateInput = this.updateInput.bind(this);
//this.updateNameinput = this.updateNameinput.bind(this);
//this.updateUserNameinput = this.updateUserNameinput.bind(this);
//this.updateEmailinput = this.updateEmailinput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
      }
/*  updateIDinput = (event) =>{
    this.setState({ID : event.target.value});
    }
    updateNameinput = (event) =>{
      this.setState({Name : event.target.value});
      }
      updateUserNameinput = (event) =>{
        this.setState({username : event.target.value});
        }
        updateEmailinput = (event) =>{
          this.setState({Email : event.target.value}) ;
          }
  */ 
 updateInput = (event) =>{
const name = event.target.name
this.setState({[name]:event.target.value})
 }

  /*
  updateInput(event){
            this.setState({[event.target.ID] : event.target.value});
            this.setState({[event.target.Name] : event.target.value});
            this.setState({[event.target.username] : event.target.value});
            this.setState({[event.target.Email]: event.target.value});
          }
*/
  handleSubmit(){
    var dict = { id: this.state.ID, name:this.state.Name , username: this.state.username , email: this.state.Email };

    axios.post('https://jsonplaceholder.typicode.com/users', dict)
    .then(response => {
      console.log(response)
      this.setState({isLoaded:true,
                      flag:1,
                    })
    })
    .catch(error => {
      alert(error);
      console.log(error);
    })
    }

  render() {

    const { error, isLoaded, items, ID,Name,username,Email } = this.state;

    if (this.state.inter == 0){

      return(
      <div>

<form>    
    <p>ID:<input type="text" name="ID"  onChange={this.updateInput}/> </p>
    <p>Name:<input type="text" name="Name"  onChange={this.updateInput} /> </p>
    <p>User Name:<input type="text" name="username"  onChange={this.updateInput} /></p>
    <p>Email: <input type="text" name="Email"  onChange={this.updateInput} /></p> 
</form> 


  
      <button onClick={this.handleSubmit}>
      Register
      </button>

      </div>
      );
 

    }else{

      return(

      <div>
      <button onClick={this.handleSubmit} >
      Register
      </button>

      <h1> Post Request Submitted Successfully</h1>


      </div>

      );
    }

  }

  componentDidMount() {

    }
}

export default App;
