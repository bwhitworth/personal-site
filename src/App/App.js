import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import '../App/App.scss';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <React.Fragment>
            <div className='container d-flex justify-content-center'>
              <h3>Bethany's Website</h3>
             </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
