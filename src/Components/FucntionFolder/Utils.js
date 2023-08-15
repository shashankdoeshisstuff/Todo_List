import { useContext } from 'react';
import ListContext from '../../ContextFolder/ListContext'

const handleDeleteItem = (task, index) => {

  const updatedList = [...task.taskList];
  updatedList.splice(index, 1);
  task.setTaskList(updatedList);
}

const handleCheckBoxChange = (task, index) => {
  const updatedList = [...task.taskList];
  updatedList[index].done = !updatedList[index].done;
  task.setTaskList(updatedList);
}

const handleEditMode = (task, index) => {
  const updatedValue = [...task.editValue];
  updatedValue[index] = !updatedValue[index];
  task.setEditValue(updatedValue);
}

export {handleDeleteItem, handleCheckBoxChange, handleEditMode};