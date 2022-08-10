import React, { FC } from 'react';
import { useTodoListStats } from './../store/todoListStatsState';

export const TodoListStats: FC = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted} = useTodoListStats();
  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUnCompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};
