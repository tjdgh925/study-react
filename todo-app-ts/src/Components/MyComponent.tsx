import React from "react";

type MyComponentProps = {
  name: string;
  favoriteNumber: number;
  children?:
  | React.ReactChild
  | React.ReactChild[];
}
const MyComponent = ({name, favoriteNumber, children}: MyComponentProps) => {
  return (
    <div>
      <a>
      나의 새롭고 멋진 컴포넌트, 내 이름은 {name}
      </a>
      <a>
        내 자식은 {children}
      </a>
      <a>
        좋아하는 번호는 {favoriteNumber}
      </a>
    </div>
  )
};

MyComponent.defaultProps = {
  name: 'standard'
}

export default MyComponent;
