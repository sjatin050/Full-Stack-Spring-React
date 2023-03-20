function ListTodosComponent() {

    const today = new Date()
    
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    // [] it will create an array
    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
        {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
        {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
    ]



    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div>
                <table className="table">
                    {/* thead is table head */}
                    <thead>
                            <tr>
                                <td>ID</td>
                                <td>Description</td>
                                <td>Is Done?</td>
                                <td>Target Date</td>
                            </tr>
                    </thead>
                    {/* tbody is table body */}
                    <tbody>
                    {
                        // map works as a for loop
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent