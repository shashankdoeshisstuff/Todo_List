import './App.css';
import AddItem from './Components/FucntionFolder/AddItem';
import DeleteList from './Components/FucntionFolder/DeleteList';
import ListOption from './Components/ListOption';
import { ListProvider } from './ContextFolder/ListContext';

function App() {
  return (
    <ListProvider>
      <div className='boxContainer'>
        <h1>Todo List </h1>
        <AddItem />
        <ListOption />
        <DeleteList/>
      </div>
    </ListProvider>
  );
}

export default App;
