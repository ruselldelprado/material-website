import Loading from '../../components/Loading';
import { useTodo } from '../../hooks/Todo-Hooks';
import AddItem from './AddItem';

import Todo from './Todo';



const TodoList = () => {
    const [data, name, setName, addItem, setLoading, loading, enter] = useTodo();


    if (loading) {
        return <Loading />
    }

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >

            <div
                style={{
                    position: 'absolute',
                    top: '60px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                    
                }}
            >
                <AddItem
                    name={name}
                    setName={setName}
                    addItem={addItem}
                    enter={enter}
                />
                
                <div style={{ padding: '20px'}}>
                    {data.map((todo) => (<Todo key={todo._id} todo={todo} setLoading={setLoading}/>))}
                </div>
            </div>
        </div>
    )
}

export default TodoList;
