import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Jay', age: 21 },
  { name: 'Bob', age: 22 },
];

const UserSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    //위에 조건문으로 inputRef.current가 null일 경우를 처리했기 때문에, 오류가 발생하지 않는다.
    inputRef.current.focus();
  }, []);

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UserSearch;
