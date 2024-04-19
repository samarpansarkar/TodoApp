import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Todo 1",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }
});



const useTodo = () => {
    return useContext(TodoContext)
}
const TodoProvider = TodoContext.Provider;


export { TodoContext, useTodo, TodoProvider }