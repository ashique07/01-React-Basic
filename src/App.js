import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name : "Max", age : 27},
      {name : "Manu", age : 26},
      {name : "Steph", age : 26}
    ],

    anotherState : "anotherValue"
  }

  switchNameHandler = (newName) => {

    this.setState ( {
      persons : [
        {name : newName, age : 27},
        {name : "Manu", age : 26},
        {name : "Steph", age : 101}
      ]
    }
    );
  }

  nameChangedHandler = (event) => {

    this.setState ( {
      persons : [
        {name : "Max", age : 27},
        {name : event.target.value, age : 26},
        {name : "Steph", age : 26}
      ]
    }
    );
  }

  render() {

    const style = {
      backgroundColor : "pink",
      font : "inherit",
      border : "1px solid blue",
      padding : "8px"
    }

    return (
      <div className="App">
        <h1>Hello ! I am napuli!</h1>
        <p> This is a paragraph</p>

        <button style = {style} onClick = {this.switchNameHandler.bind(this,"ASHIQUE")}>SWITCH NAME !!</button>

        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>

        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this,"MOHAIMIN")}
        changed = {this.nameChangedHandler}> Hobby is racing </Person>
        

        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>

      </div>
    );
  }
}

export default App;