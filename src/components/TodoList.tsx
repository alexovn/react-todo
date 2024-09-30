import type { TodoItem as ITodoItem } from '@/types/TodoItem'

import TodoItem from '@/components/TodoItem'

function TodoList({ list, onSetList }: { list: ITodoItem[], onSetList: (newList: ITodoItem[]) => void }) {
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

  return (
    <ul className="todo-app__list">
      {list.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          onItemChange={changeTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
