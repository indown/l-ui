import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button:React.FC<ButtonProps> = (props) => {
    return(
        <button {...props}>{props.children}</button>
    )
}

export default Button;