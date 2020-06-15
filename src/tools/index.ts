const classNames = (...names: Array<(string | undefined)>) => 
    names.filter(Boolean).join(' ');



export {classNames}

