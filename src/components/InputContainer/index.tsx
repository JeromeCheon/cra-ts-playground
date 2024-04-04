import { ShowInputButton } from 'components/ShowInputButton';
import { ToDoInput } from 'components/TodoInput';
import { useState } from 'react';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onAddTodo = (todo: string) => {
    onAdd(todo);
    setShowTodoInput(false);
  };
  return (
    <>
      {showTodoInput && <ToDoInput onAdd={onAddTodo} />}
      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
    </>
  );
};
