import React, {useRef, useState, useMemo} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

// import InputSample from './InpustSample';
// import Counter from './Counter';
// import Hello from './Hello';
// import Wrapper from './Wrapper';

function countActiveUsers(users) {
  console.log('활성 사용자의 수를 계산하는중');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });
  const {username, email} = inputs;
  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };
  const [users, setUsers] =useState([   
    {
        id: 1,
        username: 'Jang',
        email: 'tjdgh92@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'kim',
        email: 'kim@example.com',
        active: false
    }
    ]);
    const nextId = useRef(4);
    const onCreate = () =>{
      const user = {
        id: nextId.current,
        username,
        email
      };
      setUsers(users.concat(user));
      setInputs({
        username:'',
        email:''
      });
      nextId.current += 1;
    };
    const onRemove = id =>{
      setUsers(users.filter(user => user.id !== id));
    };
    const onToggle = id =>{
        setUsers(
          users.map(user=>
            user.id === id ? { ...user, active: !user.active} : user
            )
        );
    };
    const count = useMemo(() => countActiveUsers(users), [users]);
    return (
      <>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성사용자 수 : {count}</div>
      </>
    );
  }
  
  export default App;