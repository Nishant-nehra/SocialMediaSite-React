import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import { configureStore } from './store';

//Instead of creating store here we are importing it from store folder makes it more readable
const store = configureStore();
console.log('store', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
