import React, { useContext, useState } from 'react'
import TaskList from './TaskList'
import DoneList from './DoneList';
import TodoList from './TodoList';
import { handleEditMode } from './FucntionFolder/Utils';
import ListContext from '../ContextFolder/ListContext'

const ListOption = () => {
    const [value, setValue] = useState(1);
    const task = useContext(ListContext);

    const handleWhatToShow = () => {
        switch(value) {
            case 1:
                return (
                    <TaskList />
                );
            case 2:
                return (
                    <DoneList/>
                )
            case 3:
                return (
                    <TodoList/>
                )

            default:
                return (
                    <TaskList />
                );
        }
    }

    const handleEditModeOff = () => {
        const tempList = [...task.editValue];

        for(let i = 0; i < tempList.length; i++) {
            if(tempList[i] === true) {
                handleEditMode(task, i);
            }
        }
      }

    return (
    <>
    <h2>List View</h2>
    <div className='ListOption'>
        <button className='btn blueBtn' onClick={() => {setValue(1); handleEditModeOff()}}>All</button>
        <button className='btn blueBtn' onClick={() => {setValue(2); handleEditModeOff()}}>Done</button>
        <button className='btn blueBtn' onClick={() => {setValue(3); handleEditModeOff()}}>Todo</button>
    </div>
    <div className='TaskList'>
        {handleWhatToShow()}
    </div>
    </>
  )
}

export default ListOption