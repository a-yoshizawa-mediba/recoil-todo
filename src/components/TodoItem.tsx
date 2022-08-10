import React, { ChangeEventHandler, FC, useCallback, useMemo } from 'react';
import { TodoItemType, useTodoList } from './../store/todoList';

type Props = {
  item: TodoItemType;
};

export const TodoItem: FC<Props> = ({ item }) => {
  const { todoList } = useTodoList();
  console.log(todoList, item);
  const { editItemTextAtIndex, toggleItemCompletionAtIndex, deleteitemAtIndex } = useTodoList();
  const index = useMemo(() => todoList.findIndex((listItem) => listItem === item), [todoList, item]);

  const editItemText: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      editItemTextAtIndex(index, item, value);
    }, [index, item, todoList]
  );

  const toggleItemCompletion = useCallback(() => {
    toggleItemCompletionAtIndex(index);
  }, [index, item, todoList]);

  const deleteItem = useCallback(() => {
    deleteitemAtIndex(index);
  }, [index, item, todoList]);

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input type='checkbox' checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
