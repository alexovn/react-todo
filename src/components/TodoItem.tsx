import type { TodoItem as ITodoItem } from '@/types/TodoItem'
import { useEffect, useRef, useState } from 'react'

function TodoItem({
  item,
  onItemChange,
}: {
  item: ITodoItem
  onItemChange: (item: ITodoItem, name: string) => void
}) {
  const [isEdit, setIsEdit] = useState(false)
  const itemRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEdit && itemRef.current) {
      itemRef.current.focus()
    }
  }, [isEdit])

  function handleEdit() {
    setIsEdit(true)
  }

  function handleBlur() {
    setIsEdit(false)
  }

  function onKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      setIsEdit(false)
    }
  }

  return (
    <li className="todo-app__item">
      {/* <span className="todo-app__item-color" /> */}

      {/* <input
        type="checkbox"
        className="pin-checkbox"
      />

      <span
        className="todo-app__item-pin"
      >
        <span className="todo-app__item-pin-icon">
          <i className="fas fa-thumbtack"></i>
        </span>
      </span> */}

      {/* <input
        className="checkbox"
        type="checkbox"
      />
      <span
        className="todo-app__item-checkbox"
      >
      </span> */}

      {
        isEdit
          ? (
              <input
                ref={itemRef}
                value={item.name}
                className="todo-app__item-editor"
                onChange={e => onItemChange(item, e.target.value)}
                onBlur={() => handleBlur()}
                onKeyUp={e => onKeyUp(e)}
              />
            )
          : (
              <label
                className="todo-app__item-name"
                onDoubleClick={() => handleEdit()}
              >
                {item.name}
              </label>
            )
      }

      {/* <button
        className="todo-app__remove-btn"
        type="button"
      >
      </button> */}
    </li>
  )
}

export default TodoItem
