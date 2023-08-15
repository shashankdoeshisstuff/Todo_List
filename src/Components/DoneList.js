import React, { useContext } from 'react'
import ListContext from '../ContextFolder/ListContext'
import { handleCheckBoxChange, handleDeleteItem } from './FucntionFolder/Utils';
import {MdDeleteForever, MdRemoveCircle} from 'react-icons/md'

const DoneList = () => {
    const task = useContext(ListContext);

    // eslint-disable-next-line array-callback-return
    const handleDoneList = task.taskList.map((List, index) => {
        if (List.done === true) {
            return (
                <div className='list'>
                    <li key={index}>{List.item}</li>
                    <div className='list-func'>
                    <button
                        className='btn listBtn tickBtn' 
                        onClick={() => handleCheckBoxChange(task, index)}>
                        {<MdRemoveCircle/>}   
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
            {handleDoneList}
        </ul>
    </div>
  )
}

export default DoneList