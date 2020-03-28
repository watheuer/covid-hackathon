import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AskContainer from './asks/AskContainer';

function App() {
  return (
    <Provider store={store}>
      <AskContainer />
    </Provider>
  );
}

export default App;
