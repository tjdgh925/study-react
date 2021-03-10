import React, { useEffect } from 'react';

function HistorySample({ history }) {
    const goBack = () =>{
        history.goBack();
    }
    const goHome = () => {
        history.push('/');
    }

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말루 떠날거에요??');
        return () => {
            unblock();
        }
    }, [history]);

    return(
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈 화면</button>
        </div>
    );
}

export default HistorySample;