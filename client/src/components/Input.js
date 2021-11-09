import {TextField } from '@mui/material'
const Input = ({name, type}) => {
    return (
        <>
            <TextField
                type={type}
                id="input-with-icon-adornment"
                label={name}
            />
        </>
    )
}

export default Input
