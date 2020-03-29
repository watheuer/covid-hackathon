import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AskContainer from './asks/AskContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import RequestForm from './asks/RequestForm';

const homePage = ({ }) => <p>Home page</p>;

const donatePage = ({ }) => (
  <Provider store={store}>
    <AskContainer />
  </Provider>
);

const requestPage = ({ }) => (
  <Provider store={store}>
    <RequestForm />
  </Provider>
);

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' render={homePage} />
        <Route exact path='/donate' render={donatePage} />
        <Route exact path='/request' render={requestPage} />
      </div>
    </Router>
  );
}

export default App;
