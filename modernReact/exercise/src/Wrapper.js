import React from 'react';

function Wrapper({children}){
    const style = {
        border: '2px solid gray',
        padding: '15px',
    };
    return (
        <div
            style={style}>
            {children}
        </div>
    )
}

export default Wrapper;