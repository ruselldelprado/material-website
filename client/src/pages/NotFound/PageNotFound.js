import { Typography, Box } from "@mui/material"

const PageNotFound = () => {
    return (
        <Box 
            sx={{
                width: '100vw',
                height: '100vh',
            }}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Typography variant='h3' sx={{ color: 'red' }}>
                404
            </Typography>
            <Typography variant='h3' sx={{ color: 'red' }}>
                Page Not Found
            </Typography>
        </Box>
    )
}

export default PageNotFound
