import React, { useContext, useState } from 'react'
import {FaBook} from 'react-icons/fa'
import ListContext from '../../ContextFolder/ListContext'

const AddItem = () => {
    const task = useContext(ListContext);
    const [newItem, setNewItem] = useState({
        item: '',
        done: false,
    });

    const handleAddItem = () => {
        if(newItem.item.trim() !== '') {
            task.setTaskList([...task.taskList, newItem]);
            setNewItem({
                item: '',
                done: false,
            });
        }
    console.log(task.taskList);
    }

    return (
    <>
    <h2>Add Items</h2>
    <div className='addItem'>
        <div>
            <label htmlFor='addItem'>{<FaBook />}</label>
            <input 
                className='input addInput'
                id='addItem'
                value={newItem.item} 
                onChange={(e) => setNewItem({...newItem, item: e.target.value})}
                placeholder='Add New Item...' 
            />
        </div>
        <button className='btn blueBtn' onClick={handleAddItem}>Add New Task</button>
    </div>
    </>
    )
}

export default AddItem