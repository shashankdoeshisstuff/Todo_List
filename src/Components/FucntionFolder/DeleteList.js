import React, { useContext } from 'react'
import ListContext from '../../ContextFolder/ListContext'

const DeleteList = () => {
    const task = useContext(ListContext)

    const handleDeleteAllTask = () => {
        task.setTaskList([]);
    }

    const handleDeleteDoneTask = () => {
        const updatedList = task.taskList.filter(item => !item.done);
        task.setTaskList(updatedList);
    }

    return (
        <div className='delete-func'>
            <button className='btn redBtn' onClick={handleDeleteDoneTask}>Delete done tasks</button>
            <button className='btn redBtn' onClick={handleDeleteAllTask}>Delete all tasks</button>
        </div>
  )
}

export default DeleteList