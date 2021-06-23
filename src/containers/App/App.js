import { Component } from 'react';
import './App.css';
import LeftMenu from '../LeftMenu/LeftMenu';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'planets'
    }
  }
  render() {
    return (
      <div className="App">
        <LeftMenu />
        <h1>It works!</h1>
      </div>
    );
  } 
}

export default App;
