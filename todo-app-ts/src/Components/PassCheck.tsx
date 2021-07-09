import React, { useState } from 'react';
import './css/PassCheck.css'
const PassCheck = () => {
  const realPass: string = '1234';

  interface PassCheck{
    pass: string;
    clicked: boolean;
    validated: boolean
  }
  const [password, setPassword] = useState <PassCheck>({
    pass: '',
    clicked: false,
    validated: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value);
    setPassword({
      ...password,
      [name]: value
    });
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (password.pass === realPass)
      setPassword({
        ...password,
        validated: true,
        clicked: true
      });
    else
    setPassword({
      ...password,
      validated: false,
      clicked: true
    });
    console.log(password.clicked)
  }
  return (
    <div>
      <input
        type="password"
        name="pass"
        value={password.pass}
        onChange={handleChange}
        className=
        {password.clicked
          ? (password.validated
            ? 'success' : 'failure')
          : ''
        }
      />
      <button onClick={handleClick}>검증하기</button>
    </div>
  )

}

export default PassCheck;