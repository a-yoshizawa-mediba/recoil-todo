import { selectorFamily, useRecoilValue } from "recoil";
import { TodoItemType, useTodoList } from "./todoList";

type TodoStatsType = {
  totalNum: number;
  totalCompletedNum: number;
  totalUnCompletedNum: number;
  percentCompleted: number;
};

const todoListStatsState = selectorFamily<TodoStatsType, TodoItemType[]>({
  key: 'todoListStatsState',
  get: (todoList) => () => {
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUnCompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalUnCompletedNum,
      totalCompletedNum,
      percentCompleted,
    };
  },
});

export const useTodoListStats = () => {
  const { todoList } = useTodoList();
  const {
    totalNum,
    totalUnCompletedNum,
    totalCompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState(todoList));

  return {
    totalCompletedNum,
    totalUnCompletedNum,
    totalNum,
    percentCompleted,
  };
};
