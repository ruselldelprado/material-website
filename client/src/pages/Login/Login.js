import { Stack, Paper, Typography, Button, Divider, IconButton, Box} from '@mui/material/'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '../../components/Input'
const Login = () => {
    return (
        <form>
            <Box style={{background: 'baba' ,width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                <Paper elevation={7} sx={{padding: '1.5em', marginBottom: '4em'}}>
                    <Stack style={{ width: '280px', textAlign: 'center'}} spacing={2}>
                        <Typography variant='h5' >
                            Login
                        </Typography>
                        <Input name='Username' type='outline-input' />
                        <Input name='Password' type='password' />
                        <Button variant="contained" >Login</Button>
                        <Button variant="contained" color='secondary' >Sign Up</Button>
                        <Divider>
                            or
                        </Divider>
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                            <IconButton size='medium'>
                                <GoogleIcon sx={{ color: 'red' }} fontSize='large'/>
                            </IconButton>
                            <IconButton size='medium'>
                                <FacebookRoundedIcon color='primary' fontSize='large'/>
                            </IconButton>
                            <IconButton size='medium' >
                                <GitHubIcon  sx={{ color: 'black' }} fontSize='large'/>
                            </IconButton>
                        </Stack>
                        
                    </Stack>
                </Paper>
            </Box>
        </form>
    )
}

export default Login
