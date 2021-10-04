import React from 'react';
import './App.css';
import { useState } from 'react';
import Data from './Components/Data/Data';
import List from './Components/List/List';
import Cake from '../src/images/bday-370.gif'
function App() {
  const [team,setTeam]=useState(Data)
  return (
    <div className="App">
      <h5 className="bg-dark text-light p-2">Birthday Reminder  <img style={{height:'80px'}} src={Cake} alt="" /></h5>
   <div className="b mt-5 pt-5">
   <h5>{team.length} Birthdays Remaining</h5>
   </div>
   
     <div className="row ">
     
      {
        team.map((team)=>{
          return  <List key={team.id} team={team}/>
        })
      }
     
      </div>
      <div className="b">
      <button type="button" style={{backgroundColor:'#D06297'}}  onClick={()=>setTeam([])} className=" btn  button form-control">Clear All</button>
      </div>
     
    
    </div>
  );
}

export default App;
