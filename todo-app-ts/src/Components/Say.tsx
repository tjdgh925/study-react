import React from "react";
import { useState } from "react";

const Say = () => {
  const [messgae, setMessage] = useState<string>('');
  const onClickEnter = () => setMessage('Hello');
  const onClickLeave = () => setMessage('FareWell');
  const [color, setColor] = useState<string>('black');
  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}>{messgae}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>RED</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>GREEN</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>BLUE</button>
    </div>
      )
}

export default Say;