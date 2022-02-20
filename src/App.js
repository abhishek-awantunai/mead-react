import React, { Component}from 'react';
import styles from './App.module.css';

const initialState = {
  isInvalid: false
};

class App extends Component {
  state = {
    ...initialState
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isInvalid: true });
    }, 3000);
  }

  render() { 
    return (
      <div className={styles.container}>
        <h3 className={this.state.isInvalid ? styles.red_head : ''}>App Class</h3>
        <button style={{color: this.state.isInvalid ? 'white' : 'black', backgroundColor: this.state.isInvalid ? 'cornflowerblue' : 'white'}}>Click Me</button>
        <ul>
          <li style={{color: !this.state.isInvalid ? 'black' : 'cornflowerblue'}}>List 1 - content</li>
          <li style={{color: !this.state.isInvalid ? 'black' : 'cornflowerblue'}}>List 2 - content</li>
          <li style={{color: !this.state.isInvalid ? 'black' : 'cornflowerblue'}}>List 3 - content</li>
          <li style={{color: !this.state.isInvalid ? 'black' : 'cornflowerblue'}}>List 4 - content</li>
          <li style={{color: !this.state.isInvalid ? 'black' : 'cornflowerblue'}}>List 5 - content</li>
        </ul>
      </div>
    );
  }
}

export default App;