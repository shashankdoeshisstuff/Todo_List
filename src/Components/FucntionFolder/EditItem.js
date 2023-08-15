import React, { useContext, useState } from 'react'
import ListContext from '../../ContextFolder/ListContext'
import {MdSaveAs} from 'react-icons/md'
import { handleEditMode } from './Utils';

const EditItem = (props) => {
  const task = useContext(ListContext);
  const [inputItem, setInputItem] = useState('');

  const { index, item} = props;

  const handleItemChange = (index) => {
    if(inputItem.trim() !== '') {
      const updatedList = [...task.taskList];
      updatedList[index].item = inputItem;
      task.setTaskList(updatedList);
      setInputItem('');
      handleEditMode(task, index)
    }
  }

  const handleEdit = () => {
    if (task.editValue[props.index]) {
      return (
        <div className='list-func'>
          <input
            className='input editInput' 
            placeholder='Edit Item...'
            onChange={(e) => setInputItem(e.target.value)}
          />
          <button
            className='btn listBtn tickBtn'
            onClick={() => handleItemChange(index)}
          >{<MdSaveAs/>}</button>
        </div>
      )
    } else {
      return (
        <li key={index}>{item}</li>
      )
    }
  }

  return (
    <div>
      {handleEdit()}
    </div>
  )
}

export default EditItem