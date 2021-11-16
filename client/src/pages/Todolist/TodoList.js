import { Button, Paper, TextField } from '@mui/material';
import Loading from '../../components/Loading';
import { useTodo } from '../../hooks/Todo-Hooks';
import DeleteBtn from './DeleteBtn';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';



const TodoList = () => {
    const [data, name, setName, addItem, setLoading, loading,] = useTodo();

    if (loading) {
        return <Loading />
    }
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>

            <div style={{
                position: 'absolute',
                top: '60px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
                    
            }}>
                <Paper style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    minWidth: '20vw',
                   
                }}>
                    <TextField variant='filled' value={name} onChange={e => setName(e.target.value)} />
                    <Button onClick={addItem} color='secondary' style={{
                        height: '100%'
                    
                    }}>
                        <AddCircleRoundedIcon/>
                    </Button>
                </Paper>
                    
                <div style={{
                    padding: '20px',
                   
                }}>
                    
                {data.map((item) => (
                    <Paper key={item._id} elevation={4} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        minWidth: '20vw',
                        padding: '20px',
                        margin: '2px'
                       
                    }}>
                        <h1 >{item.name}</h1>
                        <p>{new Date(item.date).toGMTString("en-US")}</p>
                        <DeleteBtn id={item._id} name={item.name} setLoading={setLoading}/>
                    </Paper>
                ))}
                </div>
            </div>
        </div>
    )
}

export default TodoList;
