import type { TodoItem as ITodoItem } from '@/types/TodoItem'
import TodoList from '@/components/TodoList'
import uniqueId from '@/utils/uniqueId'
import { useMemo, useState } from 'react'

function Todo() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState<ITodoItem[]>([])
  const [activeFilter, setActiveFilter] = useState('All')

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

  const filteredList = useMemo(() => {
    function filterList() {
      if (activeFilter === 'All') {
        return list
      }

      if (activeFilter === 'Active') {
        return list.filter(item => !item.completed)
      }

      if (activeFilter === 'Completed') {
        return list.filter(item => item.completed)
      }

      return []
    }
    return filterList()
  }, [list, activeFilter])

  const filteredListSentence = useMemo(() => {
    return `${filteredList.length} ${filteredList.length === 1 ? 'item' : 'items'} left`
  }, [filteredList])

  function clearCompletedTodos() {
    const newList = list.filter(item => !item.completed)
    setList(newList)
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
          list={filteredList}
          onSetList={(newList: ITodoItem[]) => setList(newList)}
        />
      </div>

      <div className="todo-app__footer">
        <div className="todo-app__counter">
          {filteredListSentence}
        </div>
        <ul className="todo-app__filters">
          <li
            className="todo-app__filters-item"
            onClick={() => setActiveFilter('All')}
          >
            <a
              href="#!"
              className={`${activeFilter === 'All' ? 'selected' : ''}`}
            >
              All
            </a>
          </li>
          <li
            className="todo-app__filters-item"
            onClick={() => setActiveFilter('Active')}
          >
            <a
              href="#!"
              className={`${activeFilter === 'Active' ? 'selected' : ''}`}
            >
              Active
            </a>
          </li>
          <li
            className="todo-app__filters-item"
            onClick={() => setActiveFilter('Completed')}
          >
            <a
              href="#!"
              className={`${activeFilter === 'Completed' ? 'selected' : ''}`}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="btn todo-app__clear-btn"
          type="button"
          onClick={() => clearCompletedTodos()}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default Todo
