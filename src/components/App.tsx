import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { TodoList } from './TodoList';

const App: FC = () => {

  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  )
}
export default App;
