import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js'
import Form from './components/Form.js'
//import Input from './components/Input.js'

class App extends Component {
  render() {
    return (
  <body>
      <div className="App">
        <h1 className="App-header">Form</h1>
        
        <Form/>
        <Button/>
       <footer className="App">
         </footer> 
      </div>
  </body>
    )
  }
}

export default App;
