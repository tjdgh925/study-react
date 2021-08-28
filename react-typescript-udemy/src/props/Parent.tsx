import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color={'red'} onClick={() => console.log('Clicked')}>
      hello it's children
    </ChildAsFC>
  );
};

export default Parent;
