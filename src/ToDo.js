function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item-text srtike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>

                x
            </div>


        </div>
    )




}
export default ToDo;