import { Divider, Paper, Typography } from "@mui/material"
import Input from '../../components/Input'

const Signup = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >

            <Paper elevation={7}
                sx={{
                    padding: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='h4' >
                    Signup
                </Typography>
                <Input type='outline-input' name='Username' />
                <Input type='password' name='Password' />
                <Input type='password' name='Confirm Password' />
                <Divider/>
            </Paper>
        </div>
    )
}

export default Signup
