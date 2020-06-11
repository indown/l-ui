import React from 'react'
import './icon/wechat.svg'
import './icon/qq.svg'

import './ccc.scss'

interface IconProps {
    type: 'wechat' | 'qq'
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return(
        <svg className='test'>
            <use xlinkHref={`#${props.type}`}></use>
        </svg>
    )
}

export default Icon as React.FunctionComponent<IconProps>