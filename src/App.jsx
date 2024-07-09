import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/Redux';
import Redux from './components/Redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Redux />
      </div>
    </Provider>
  );
};

export default App;
