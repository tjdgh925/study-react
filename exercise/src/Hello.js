import react from 'react';
import React from 'react';

function Hello({color, name, isSpecial}) {
    return(
        <>
        <div>Hello World!</div>
        <div style={{color:color}}>
            {isSpecial && <b>**</b>}
            My name is {name}</div>
        </>
    )
}
Hello.defaultProps ={
    name: '이름없음'
}

export default Hello;