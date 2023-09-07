import { addEntryRedux } from '../actions/entries.actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function useEntryDetails() {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(false);

    const dispatch = useDispatch();

    const addEntry = () => {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }))
        setDescription('');
        setValue('');
        setIsExpense(false);
    };

    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
    }
}