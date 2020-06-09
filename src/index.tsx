import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

function App() {
    return(
        <div>
            <Icon type='qq' />
            <Icon type='wechat' />
        </div>
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />,domContainer)