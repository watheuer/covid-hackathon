import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AskContainer from './asks/AskContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3282b8'
    },
    secondary: {
      main: '#3282b8'
    }
  }
});

const donatePage = ({ }) => (
  <Provider store={store}>
    <AskContainer />
  </Provider>
);

// const requestPage = ({ }) => (
//   <Provider store={store}>
//     <RequestForm />
//   </Provider>
// );

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Header />
          <Route exact path='/' render={donatePage} />
          {/* <Route exact path='/request' render={requestPage} /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
