import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
//2. Importing Team and Form Components
import Team from "./Team"
import Form from "./Form"

function App() {
//1. Created a Team Component that returns the list of team members
const [team,setTeam] = useState([
    {  
      id:1,
      name: "Karla Martinez",
      email: "karlamartinez@gmail.com",
      role: "FullStack Developer"
    }])
 
  //13. creating a function that will handle adding a new person
  const addNewPerson = e =>{
    const newPerson = {
        //Date.now() will set an id in using date/time in millisecond, creating a unique id
        id: Date.now(),
        role: e.role,
        name: e.name,
        email: e.email
    } 
    //this section of the function adds the object to the array of objects in the initial state
    setTeam([...team, newPerson])

}

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* //3. calling the Team and Form components */}
      <Team member={team}/>
      {/* 14. pass the function as a prop*/}
      <Form addNewPerson={addNewPerson}/>
    
    </div>
  );
}

export default App;
