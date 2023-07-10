import React ,{ useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo(e) {
    e.preventDefault()
    if( todo === "" ) return
    setTodos([...todos, { id: crypto.randomUUID(), title: todo, completed: false }])
    setTodo("")
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleTodoCompletion(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <>
      <div className="todolist">
        <h2>TODO LIST</h2>
        <form onSubmit={addTodo}>
          <label htmlFor="task"> Task
            <input type="text" id='task' value={todo} onChange={e => setTodo(e.target.value)} placeholder='Enter todo'/>
            <button>Add</button>
          </label>
        </form>
        {todos.length === 0 && (
          <p>No todos available.</p>
        )}
        {todos.map(todo => (
          <div className='todo' key={todo.id}>
            <input
              type="checkbox"
              name="todo"
              id={todo.id}
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(todo.id)}
            />
            <h4>{todo.title}</h4>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
