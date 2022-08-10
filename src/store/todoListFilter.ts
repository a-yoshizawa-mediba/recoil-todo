import { atom, useRecoilState } from 'recoil';
import { useCallback } from 'react';

export const FilterValue = {
  SHOW_ALL: 'Show All',
  SHOW_COMPLETED: 'Show Completed',
  SHOW_UNCOMPLETED: 'Show UnCompleted',
} as const;

export type filterType = typeof FilterValue[keyof typeof FilterValue];

const todoListFilterAtom = atom<filterType>({
  key: 'todoListFilterAtom',
  default: FilterValue.SHOW_ALL,
});

export const useFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterAtom);
  return { filter, setFilter };
}
