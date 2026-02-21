import React from 'react';

function WithGlobalFont(Component) {
    return (props)=><div style={{fontSize:'21pxF'}}>
        <Component {...props}></Component>
    </div>
}

export default WithGlobalFont;