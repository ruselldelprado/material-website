import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const DeleteBtn = ({ id, name, setLoading }) => {
    
    const delItem = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
           await axios.delete(`/api/items/${id}`);
        } catch (error) { }
        finally {
            // alert(`deleted ${ name }`)
            setLoading(false);
        }
    }
    
    
    return (
        <div>
            <Button onClick={delItem}><DeleteIcon/></Button>
        </div>
    )
}

export default DeleteBtn
