
export default function AddTodo({addTodo}) {

    return (
        <>
            <form action="" onSubmit={addTodo}>
                <input type="text" class="add-todo-input"/>
                <input type="submit" class="add-todo-btn" value="Add Todo"  />
            </form>
        </> 
    )
}