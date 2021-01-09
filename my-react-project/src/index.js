import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// materi
import StateLess from './Materi/Function Component/Stateless Component/StateLessComp'; //-->stateless component
import StateFul from './Materi/Class Component/Stateful Component/StateFulComp' //--> stateful component
import PropsStateLess from './Materi/Function Component/Props/PropsStateLess'
import LifeCycleComp from './Materi/Class Component/Life Cycle Component/LifeCycleComp';
import HomeForPropsStateLess from './Materi/Class Component/Parent And Child Component/Home/HomeForPropsStateLess'

ReactDOM.render(
    <HomeForPropsStateLess/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
