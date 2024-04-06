import { ShowInputButton } from 'components/ShowInputButton';
import { ToDoInput } from 'components/TodoInput';
import { useState } from 'react';

export const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onClose = () => {
    setShowTodoInput(false);
  };
  return (
    <>
      {showTodoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
    </>
  );
};
