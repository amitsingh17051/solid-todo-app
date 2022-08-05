import { createSignal, createEffect } from "solid-js";
import SingleTodo from "./SingleTodo"
import AddTodo from "./AddTodo"

export default function TodoLists() {
    const [Todos, SetTodos] = createSignal([
        {
            name:"Todo One",
            id: 111,
            completed: false
        },
        {
            name:"Todo Two",
            id: 222,
            completed: true
        },
        {
            name:"Todo Three",
            id: 333,
            completed: false
        }
    ]);

   
    function handleChangeChk(e) {
        let checkedItemID = e.target.parentNode.getAttribute("data-todo-id");
       
        let UpdatedTodos = Todos().map(item => {
            if(item.id == checkedItemID) {
                if(e.target.checked) {
                item.completed = true;
                return item;
                } else {
                item.completed = false;
                return item;
                }
            }

            return item;
        }) 
        SetTodos(UpdatedTodos); 
    }
    

    function addTodo (e) {
        e.preventDefault();
        const newTodo = {};
        newTodo["name"] = e.target.elements[0].value;
        newTodo["id"] = new Date().getTime();
        newTodo["completed"] = false;
        Todos().push(newTodo);

        SetTodos(Todos()); 
        handleChangeChk(e)  
    }

    function DeleteTask(e) {
        let checkedItemID = e.target.parentNode.getAttribute("data-todo-id");
        let itemIndex = 0;
        let UpdatedTodos = Todos().map((item, i) => {
            if(item.id == checkedItemID) {
                itemIndex = i;
            }
            return item;
        }) 
        UpdatedTodos.splice(itemIndex, 1);
        SetTodos(UpdatedTodos); 
    }

    return (
        <>
            <div class="todos">
                <ul>
                    { Todos().map( item => {
                        return <SingleTodo todo={item} handleChangeChk={handleChangeChk} DeleteTask={DeleteTask}/>;
                    }) }
                </ul>
            </div>
            <AddTodo addTodo={addTodo}/>
        </>
    )

}