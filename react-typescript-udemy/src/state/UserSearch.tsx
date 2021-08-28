import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Jay', age: 21 },
  { name: 'Bob', age: 22 },
];

const UserSearch = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    console.log(foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        Name: {user && user.name}
        <br />
        Age: {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
