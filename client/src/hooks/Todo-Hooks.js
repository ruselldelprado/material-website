import axios from "axios";
import { useEffect, useState } from "react";

export const useTodo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    
    
    const getItem= async () => {
        try {
            const res = await axios.get('/api/items');
            setData(res.data);
        } catch (error) {
            
        }
        finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getItem();
    }, [data,loading])

    
    const addItem = async () => {
        if (name !== '') {
            try {
                setLoading(true)
                await axios.post('/api/items', {name} );
            } catch (error) {
                
            }
            finally {
                setLoading(false)
                setName('');
            }
        }
        
    }

    return [data, name, setName, addItem, setLoading,loading]
}

