import React ,{useState,useEffect,useRef}from 'react'
import TodoList from './components/TodoList';
import {useTodoLayerValue} from './context/TodoContext'
import './App.css';
const App = () => {
  const [{ todos },dispatch] = useTodoLayerValue();
  const [content,setContent] = useState('');

  const inputRef = useRef(null);
  useEffect(()=>{
      inputRef.current.focus();
  },[])

  const handleSubmit = (event) => {
    //console.log(content);
    event.preventDefault();//sayfayı neilediğinde refresh yapmasın

    if(!content && content.length < 1 ) return ;

    const newTodo = {
      id : Math.floor(Math.random() * 4324543563),
      content, 
      isCompleted : false
    };
    dispatch ({
      type:"ADD_TODO",
      payload : newTodo,
    });
    setContent(' ');
  };
 // console.log(todos);
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input 
          type="text" 
          className = "todo-input" 
          onChange={event => setContent(event.target.value)} 
          value={content} 
          ref={inputRef}
        />
        <button className="todo-button" >
          Add
        </button>
      </form>
      {/* Todo Listesi */}
        <TodoList todos = {todos}/>  
    </div>
  )
}

export default App
