import React, { useContext } from 'react'
import ListContext from '../ContextFolder/ListContext'
import { handleCheckBoxChange, handleDeleteItem, handleEditMode } from './FucntionFolder/Utils';
import {MdDeleteForever, MdEditNote, MdLibraryAddCheck} from 'react-icons/md'
import EditItem from '../Components/FucntionFolder/EditItem'

const TodoList = () => {
    const task = useContext(ListContext);

    // eslint-disable-next-line array-callback-return
    const handleTodoList = task.taskList.map((List, index) => {
        if (List.done !== true) {
            return (
                <div className='list' key={index}>
                    {<EditItem
                        index={index}
                        item={List.item}
                    />}
                    <div className='list-func'>
                        <button
                            className='btn listBtn tickBtn'
                            onClick={() => handleCheckBoxChange(task, index)}>
                            {<MdLibraryAddCheck/>}   
                        </button>
                        <button
                            className='btn listBtn editBtn'
                            onClick={() => handleEditMode(task, index)}>   
                            {<MdEditNote/>}
                        </button>
                        <button
                            className='btn listBtn deleteBtn'
                            onClick={() => handleDeleteItem(task, index)}>
                            {<MdDeleteForever/>}
                        </button>
                    </div>
                </div>
            )
        }
    })
  
    return (
    <div>
        <ul>
            {handleTodoList}
        </ul>
    </div>
  )
}

export default TodoList