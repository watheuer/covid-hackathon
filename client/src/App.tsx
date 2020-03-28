import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AskContainer from './asks/AskContainer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './layout/Header';
import RequestForm from './asks/RequestForm';

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
              <AskContainer />
            </Provider>
          </React.Fragment>
        )} />
        <Route exact path='/request' render={props => (
          <React.Fragment>
            <RequestForm/>
          </React.Fragment>
        )} />
      </div>
    </Router>
  );
}

export default App;
