import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Basic } from './basic/basic'
import Doctor from './basic/clsprop';
import Progress from './state/progress-component';

const basic = <Basic backgroundColor='red' border='1px solid red' sdjdkgj='10' />
const doctor = <Doctor name='abc' id='134' />
const progress = <Progress max='100' />

ReactDOM.render(
  progress,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
