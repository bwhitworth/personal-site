import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import '../App/App.scss';
import MyNavbar from '../components/shared/MyNavbar';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <React.Fragment>
          <MyNavbar/>
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
