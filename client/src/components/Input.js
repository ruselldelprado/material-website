import {TextField } from '@mui/material'
const Input = ({name, type}) => {
    return (
        <>
            <TextField
                type={type}
                label={name}
            />
        </>
    )
}

export default Input
