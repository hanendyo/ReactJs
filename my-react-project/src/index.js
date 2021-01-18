// REDUX

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Home from './Project/Home/HomeForComponentCopy';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import GlobalReducer from './Project/Pages/Redux/Reducer/GlobalReducer';




// store
const store = createStore(GlobalReducer);



ReactDOM.render(
  // Provider adalah penyedia store global, dan store nya berisi store global.
  <Provider store={store}> 
    <Home/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// // CONTEXT
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';


// import Home from './Project/Home/HomeForComponentCopy';


// ReactDOM.render(
//     <Home/>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
