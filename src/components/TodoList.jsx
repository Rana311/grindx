import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-list-container">
      {todos.length === 0 && <p>No Todos</p>}
      <ul className="todo-list">
        {todos.map(todo => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </div>
  )
}
