import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/Table"
import {Container} from "react-bootstrap"
import Textbox from "./components/Input"
import API from "./utils/api"

function App() {
  const[state,setState]=useState([])
  const[original,setOriginal]=useState([])
  const[search,setSearch]=useState("")
  useEffect(()=>{
      API.getRandomPeople().then(response=>{
        setState(response.data.results)
        setOriginal(response.data.results)
      })
  },[])
  const handleInputChange=event=>{
    const{value}=event.target
    setSearch(value)
    console.log(value)

    var newFilter=original.filter(employee=>{
      return employee.name.first.toLowerCase().includes(value.toLowerCase())
    })
    setState(newFilter)
  }
  const handleClick=event=>{
  
      var newSorted=state.sort((a,b)=>{
        return a.name.first- (b.name.first)
      })
      setState(newSorted)

      console.log(state)
  }
  return (
    <div className="App">
      <Container>
        <Textbox handleInputChange={handleInputChange} />
      <Table  results={state} handleClick={
        handleClick
      } />
      </Container>

    </div>
  );
}

export default App;
