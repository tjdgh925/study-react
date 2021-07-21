import React, { useState } from "react";

interface IterationSampleProp {
  id: number,
  text: string
}
const IterationSample = () => {
  const [names, setNames] = useState<IterationSampleProp[]>([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [nextId, setNextId] = useState<number>(5);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  } 
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  }
  const namesList = names.map(name =>(
      <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>
        {name.text}
      </li>
    ));
  const onRemove = (id: number) => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  
  // const names: string[] = ['눈사람', '얼음', '눈', '바람'];
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
)};

export default IterationSample;
