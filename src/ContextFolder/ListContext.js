const { createContext, useState } = require("react");

const ListContext = createContext();

export const ListProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]);
    const [editValue, setEditValue] = useState(Array(taskList.lenght).fill(false));

    return (
        <ListContext.Provider value={{taskList, setTaskList, editValue, setEditValue}}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContext