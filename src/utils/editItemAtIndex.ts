type ReplaceItemAtIndexType = <T>(arr: T[], index: number, newValue: T) => T[];

export const replaceItemAtIndex: ReplaceItemAtIndexType = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

type RemoveItemAtIndexType = <T>(arr: T[], index: number) => T[];

export const removeItemAtIndex: RemoveItemAtIndexType = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
