import { Button, Paper, TextField } from "@mui/material"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const AddItem = ({name, setName, addItem, enter}) => {
    return (
        <Paper
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                minWidth: '20vw', 
            }}
        >
            <TextField
                variant='outlined'
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={enter}
                placeholder="Add Task"
            />
            <Button
                onClick={addItem}
                color='primary'
                style={{
                    height: '100%'
                }}
            >
                <AddCircleRoundedIcon/>
            </Button>
        </Paper>
            
    )
}

export default AddItem
