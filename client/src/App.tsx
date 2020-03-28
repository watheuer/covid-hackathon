import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AskList from './asks/AskList';
import Header from './layout/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' render={props =>(
          <React.Fragment>
            <p>Home Page</p>
          </React.Fragment>
        )} />
        <Route exact path='/donate' render={props => (
          <React.Fragment>
            <p>Donate Page</p>
            <Provider store={store}>
              <AskList />
            </Provider>
          </React.Fragment>
        )} />
        <Route exact path='/request' render={props => (
          <React.Fragment>
            <p>Request Page</p>
          </React.Fragment>
        )} />
      </div>
    </Router>

  );
}

export default App;
