import { createContext, useState } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onAdd: (): void => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDelete: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '운동하기', '책읽기']);

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter((item) => item !== toDo));
  };

  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        onAdd,
        onDelete,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListContextProvider };
