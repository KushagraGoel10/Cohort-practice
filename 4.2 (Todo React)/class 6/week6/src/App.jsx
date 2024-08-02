import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  
  return (
    <div>
      <HeaderWithButton/>
      <Header title= " kush2" />
      <Header title= " kush3" />
      <Header title= " kush3" />
      <Header title= " kush3" />
      <Header title= " kush3" />
      
    </div>
  )
}

function HeaderWithButton(){

  const[title, setTitle]= useState("my name is kush1");

  function updateTitle(){
    setTitle("my name is " + Math.random());
  }

  return <div>

    <button onClick = {updateTitle}>Update the Title</button>
    <Header title = {title}></Header>
  </div>

}

function Header ({title}){
  return <div>
    {title}
    
  </div>
}
export default App
