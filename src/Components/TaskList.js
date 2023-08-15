import React, { useContext, useState } from 'react'
import {MdDeleteForever, MdEditNote} from 'react-icons/md'
import ListContext from '../ContextFolder/ListContext'
import EditItem from '../Components/FucntionFolder/EditItem'
import { handleCheckBoxChange, handleDeleteItem, handleEditMode } from './FucntionFolder/Utils'

const TaskList = () => {
  const task = useContext(ListContext);

  const handleTasklist = task.taskList.map((List, index) =>
    <div className='list'>
      {<EditItem 
        index={index}
        item={List.item}
      />}
      <div className='list-func'>
      <input 
        type='checkbox' 
        checked={List.done}
        onChange={() => handleCheckBoxChange(task, index)}  
      />
      <button
        className='btn listBtn editBtn'
        onClick={() => handleEditMode(task, index)}
      >{<MdEditNote/>}</button>
      <button
        className='btn listBtn deleteBtn'
         onClick={() => handleDeleteItem(task, index)}
      >{<MdDeleteForever/>}</button>
      </div>
    </div>
  )

  return (
    <div>
      <ul>
        {handleTasklist}
      </ul>
    </div>
  )
}

export default TaskList