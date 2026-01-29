import React, {ReactElement, ReactNode, useEffect, useState} from 'react';

function WithTheme(Component) {

    const [theme, setTheme] = useState('');

    useEffect(() => {
        setTheme('dark')
    }, []);
    return (props)=><div className={theme} ><Component {...props}/></div>;
}

export default WithTheme;