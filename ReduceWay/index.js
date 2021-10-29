import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import Square from './Square';
import Board from './Board'
import { createStore} from 'redux'
import { provider} from 'react-redux'
//import reducers from "./reducers/reducers"
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';


//<Square /> is calling the Squre function
//<Function_Name /> and called this function
//pass data to store all the children can use

const store=createStore(reducers);

ReactDOM.render(
  <Provider store={store} >
    <Board />
  </Provider>,
  document.getElementById('root')
);




