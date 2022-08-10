import React, { ChangeEventHandler, FC, useCallback } from 'react';
import { filterType, FilterValue, useFilter } from './../store/todoListFilter';

export const TodoListFilters: FC = () => {
  const { filter, setFilter } = useFilter();
  const updateFilter: ChangeEventHandler<HTMLSelectElement> = useCallback(
    ({ target: { value }}) => {
      if (typeof value === typeof filter) setFilter(value as filterType);
    },
    [filter, setFilter]
  );

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={FilterValue.SHOW_ALL}>ALL</option>
        <option value={FilterValue.SHOW_COMPLETED}>Completed</option>
        <option value={FilterValue.SHOW_UNCOMPLETED}>UnCompleted</option>
      </select>
    </>
  )
}