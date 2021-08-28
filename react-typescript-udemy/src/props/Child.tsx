interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//위 아래 동일한 내용이다.
//React.FC를 사용하면, children을 interface에 명시하지 않더라도 자동으로 인식이 가능하다.
//ex) <Child /> ==> <ChildAsFC> content </ChildAsFC>
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
