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
  // const TeamList = () => {
  
    
  // ])}
  // console.log(team);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* //3. calling the Team and Form components */}
      <Team member={team}/>
      <Form />
    
    </div>
  );
}

export default App;
