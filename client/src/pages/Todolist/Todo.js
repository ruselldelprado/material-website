import { Paper } from "@mui/material"
import DeleteBtn from "./DeleteBtn"

const Todo = ({todo, setLoading}) => {
    return (
        <Paper elevation={4} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            minWidth: '20vw',
            padding: '20px',
            margin: '2px'
           
        }}>
            <h1 >{todo.name}</h1>
            <p>{new Date(todo.date).toGMTString("en-US")}</p>
            <DeleteBtn id={todo._id} name={todo.name} setLoading={setLoading}/>
        </Paper>
    )
}

export default Todo
