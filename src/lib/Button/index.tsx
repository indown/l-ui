import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button:React.FC<ButtonProps> = (props) => {
    return(
        <button {...props}>button</button>
    )
}

export default Button;