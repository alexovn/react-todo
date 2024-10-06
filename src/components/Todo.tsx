import type { TodoItem as ITodoItem } from '@/types/TodoItem'
import TodoList from '@/components/TodoList'
import uniqueId from '@/utils/uniqueId'
import { useState } from 'react'

function Todo() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState<ITodoItem[]>([])

  function addTodo(todo: string) {
    const item = {
      id: uniqueId('todo-'),
      name: todo,
      completed: false,
      pinned: false,
    }

    setTodo('')
    setList([item, ...list])
  }

  function onKeyUp(e: React.KeyboardEvent, todo: string) {
    if (e.code === 'Enter') {
      addTodo(todo)
    }
  }

  return (
    <div className="todo-app">
      <div className="todo-app__header">
        <input
          className="todo-app__header-input"
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          onKeyUp={e => onKeyUp(e, todo)}
          placeholder="New ToDo"
        />
        <button
          className="todo-app__header-btn btn"
          type="button"
          onClick={() => addTodo(todo)}
        >
          Add
        </button>
      </div>
      <div className="todo-app__main">
        <TodoList
          list={list}
          onSetList={(newList: ITodoItem[]) => setList(newList)}
        />
      </div>

      {/* <div className="todo-app__footer">
        <div className="todo-app__counter">
          left
        </div>
        <ul className="todo-app__filters">
          <li className="todo-app__filters-item">
            <a
              href="#!"
            >
              All
            </a>
          </li>
          <li className="todo-app__filters-item">
            <a
              href="#"
            >
              Active
            </a>
          </li>
          <li className="todo-app__filters-item">
            <a
              href="#!"
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="btn todo-app__clear-btn"
          type="button"
        >
          Clear completed
        </button>
      </div> */}
    </div>
  )
}

export default Todo
