
export default function SingleTodo({todo, handleChangeChk}) {
    return (
        <>
            <li data-todo-id={todo.id}>
                <label class={ todo.completed ? 'text-decoration-line-through' : '' } for={`${todo.id}-checked`}> {todo.name}</label>
               
                <input id={`${todo.id}-checked`} type="checkbox"  checked={ todo.completed ? 'checked' : '' } onChange={handleChangeChk} />
                
            </li>
        </> 
    )
}