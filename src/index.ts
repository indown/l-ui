import React from 'react'
import ReactDOM from 'react-dom'
const h = React.createElement;
console.log(ReactDOM)
function Test () {
    return(
        h('div',{},'1')
    )
}
const domContainer = document.querySelector('#root');
ReactDOM.render(h(Test),domContainer)