import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './lib/icon/index'
import Button from './lib/Button/index'

function App() {
    return(
        <div>
            <Icon type='qq' />
            <Icon type='wechat' />
            <Button>按钮</Button>
        </div>
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />,domContainer)