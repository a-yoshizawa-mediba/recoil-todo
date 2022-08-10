import { selectorFamily, useRecoilValue } from 'recoil';
import { TodoItemType, useTodoList } from './todoList';
import { filterType, FilterValue, useFilter } from './todoListFilter';

const filteredTodoListState = selectorFamily<TodoItemType[], {filter: filterType, list: TodoItemType[]}>({
  key: 'filteredTodoListState',
  get: ({ filter, list }) => () => {
    switch(filter) {
      case FilterValue.SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case FilterValue.SHOW_UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const useFilteredTodoList = () => {
  const { filter } = useFilter();
  const { todoList: list } = useTodoList();
  const filteredTodoList = useRecoilValue(filteredTodoListState({ filter, list }));

  return filteredTodoList;
}
