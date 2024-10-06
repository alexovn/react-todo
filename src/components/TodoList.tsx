import type { TodoItem as ITodoItem } from '@/types/TodoItem'

import TodoItem from '@/components/TodoItem'

function TodoList({
  list,
  onSetList,
}: {
  list: ITodoItem[]
  onSetList: (newList: ITodoItem[]) => void
}) {
  function changeTodo(item: ITodoItem, name: string) {
    const newList = list.map((todo) => {
      if (todo.id !== item.id)
        return todo

      return {
        ...todo,
        name,
      }
    })

    onSetList(newList)
  }

  function completeTodo(item: ITodoItem, completed: boolean) {
    const newList = list.map((todo) => {
      if (todo.id !== item.id)
        return todo

      return {
        ...todo,
        completed,
      }
    })

    onSetList(newList)
  }

  function removeTodo(id: string) {
    const newList = list.filter(item => item.id !== id)
    onSetList(newList)
  }

  function pinTodo(item: ITodoItem, pinned: boolean) {
    const newList = list.map((todo) => {
      if (todo.id !== item.id) {
        return todo
      }

      return {
        ...todo,
        pinned,
      }
    })

    onSetList(newList)
  }

  return (
    <ul className="todo-app__list">
      {list.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onItemChange={changeTodo}
          onItemRemove={removeTodo}
          onItemComplete={completeTodo}
          onItemPinned={pinTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
