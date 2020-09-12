import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer';
import { asyncLocalStorage, observeStore } from './redux/utils';
import App from './app';
import './index.scss';
import { selectComments } from './redux/selectors';

asyncLocalStorage.getItem().then(persistedState => {
  
  const store = createStore(rootReducer, persistedState, 
    compose ( applyMiddleware( thunk ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
      
  observeStore(store, selectComments, asyncLocalStorage.setItem)
      
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
})