import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './lib/icon/icon'
import Button from './lib/Button/index'

function App() {
    return(
        <div>
            <Icon type='qq' />
            <Icon type='wechat' />
            <Button />
        </div>
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />,domContainer)