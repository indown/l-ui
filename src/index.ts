import React from 'react'
import ReactDOM from 'react-dom'
import Test from './test'

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Test),domContainer)