import React from 'react'
import { classNames } from '../../tools/index'
import '../../assets/wechat.svg'
import '../../assets/qq.svg'
import './index.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
    type: 'wechat' | 'qq',
}

const Icon: React.FunctionComponent<IconProps> = ({ className, type, ...restProps }) => {
    return (
        <svg
            className={classNames('test', className)}
            {...restProps}
        >
            <use xlinkHref={`#${type}`}></use>
        </svg>
    )
}

export default Icon as React.FunctionComponent<IconProps>