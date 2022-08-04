import { createSignal, createEffect } from "solid-js";
import SingleTodo from "./SingleTodo"
import AddTodo from "./AddTodo"

export default function TodoLists() {
    const [Todos, SetTodos] = createSignal([
        {
            name:"Todo One",
            id: 1,
            completed: false
        },
        {
            name:"Todo Two",
            id: 2,
            completed: true
        },
        {
            name:"Todo Three",
            id: 3,
            completed: false
        }
    ]);

   
    function handleChangeChk(e) {
        const checkedItemID = e.target.parentNode.getAttribute("data-todo-id");
       
            var UpdatedTodos = Todos().map(item => {
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
        newTodo["id"] = Todos().length + 1;
        newTodo["completed"] = false;
        Todos().push(newTodo);

        SetTodos(Todos()); 
        handleChangeChk(e)  
    }

 


    return (
        <>
            <div class="todos">
                <ul>
                    { Todos().map( item => {
                        return <SingleTodo todo={item} handleChangeChk={handleChangeChk} />;
                    }) }
                </ul>
            </div>
            <AddTodo addTodo={addTodo}/>
        </>
    )
}