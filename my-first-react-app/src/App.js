import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js'
import Form from './components/Form.js'
//import Input from './components/Input.js'

class App extends Component {
  render() {
    return (
      //<div className="App">
        //<h1 className="App-header">Welcome</h1>
         <div>
         <body>
             <Form/>
             <Button/>
            </body>
      </div>
      </div>
    );
  }
}

export default App;
