import React from "react";
import { useState } from "react";
interface EventPracticeForm {
  username: string
  message:string
}
// const [content, setContent] = useState<string>('');
const EventPractice = () => {
  const [content, setContent] = useState<EventPracticeForm>({
    username: '',
    message:''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value
    });
  }
  const onClick = () => {
    setContent({
      username: '',
      message:''
    })
  }
  const onClickAlert = () => {
    alert(content.username + "::" +  content.message);
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter")
      onClickAlert();
  }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={content.username}
        placeholder="Username"
        onChange={handleChange}
        />
        <input
        type="text"
        name="message"
        value={content.message}
        placeholder="Message"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        onClick={onClick}
      >
      clear
      </button>
      <button
        onClick={onClickAlert}
      >
        alert
        </button>
    </div>
  )
}
export default EventPractice;