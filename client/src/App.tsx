import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AskList from './asks/AskList';

function App() {
  return (
    <Provider store={store}>
      <AskList />
    </Provider>
  );
}

export default App;
