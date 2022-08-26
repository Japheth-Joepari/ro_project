import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux'; //This provides props to all the elements
import { createStore } from 'redux'; //This imports create store which stores react state
import { searchRobots, requestRobots } from './reducers'; //Importing the reducers

// Redux Middleware && loger
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

//Redux thunk for asynchronous javascript
import thunkMiddleware from 'redux-thunk'

//Importing Combine reducers
import { combineReducers } from 'redux';

import './index.css';
import 'tachyons';
import App from './containers/App';


//Creating a logger that will be used for debugging
const logger = createLogger();

// combining all the reducers
const rootReducer = combineReducers({searchRobots, requestRobots})

//Creating a storage for the reducers
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) //Passing the search robots to the store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> 
        <App />
    </Provider>
); //passing redux as props