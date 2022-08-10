import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { removeItemAtIndex, replaceItemAtIndex } from './../utils/editItemAtIndex';

export type TodoItemType = {
  id: number;
  text: string;
  isComplete: boolean;
};

const todoListAtom = atom<TodoItemType[]>({
  key: 'todoListAtom',
  default: [],
});

let id = 0;
const getId = () => id++;

export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const addListItem = useCallback((text: string) => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        isComplete: false,
        text 
      },
    ]);
  }, [setTodoList]);

  const editItemTextAtIndex = useCallback(
    (index: number, item: TodoItemType, text: string) => {
      const newList = replaceItemAtIndex(todoList, index, { ...item, text });
      setTodoList(newList);
    },
    [todoList, setTodoList]
  );

  const toggleItemCompletionAtIndex = useCallback(
    (index: number) => {
      const item = todoList[index];
      const newList = replaceItemAtIndex(todoList, index, { ...item, isComplete: !item.isComplete })
      setTodoList(newList);
    },
    [setTodoList, todoList]
  );

  const deleteitemAtIndex = useCallback(
    (index: number) => {
      const newList = removeItemAtIndex(todoList, index);
      setTodoList(newList);
    },
    [setTodoList, todoList]
  );

  return { todoList, addListItem, editItemTextAtIndex, toggleItemCompletionAtIndex, deleteitemAtIndex };
};
