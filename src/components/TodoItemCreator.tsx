import React, { useState, FC, useCallback, ChangeEventHandler } from 'react';
import { useTodoList } from './../store/todoList';

/** 
 * 新しいTODOを追加する入力フォーム
 * Atomのset関数を呼び出し、ボタンクリックをトリガーにデータを更新している
*/

export const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { todoList, addListItem } = useTodoList();

  const addItem = useCallback(() => {
    addListItem(inputValue)
    setInputValue('');
  }, [inputValue, inputValue, setInputValue]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      setInputValue(value);
    },
  []);

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// TODO: idを再起動時も連番にする

let id = 0;
const getId = () => id++;