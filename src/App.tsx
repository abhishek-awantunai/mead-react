import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Modal from './components/modal';

const portalContainer = document.getElementById('portal');

function App() {
  return (
    <Fragment>
      {
        ReactDOM.createPortal(<Modal />, portalContainer)
      }
      <div className="App">
        <h1>App Page</h1>
      </div>
    </Fragment>
  );
}

export default App;