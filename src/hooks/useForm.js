// write your custom hook here to control your checkout form
import {useState} from 'react';


const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue; 
    })

    localStorage.setItem(key, JSON.stringify(value));

    const updateLocalStorageValue = value => {
        setValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [value, updateLocalStorageValue];
}


function useForm (initialValue) {
   const [values, setValues] = useLocalStorage("form", initialValue) //values now = either initial values, or what was returned from localstorage.  setValues now = updating state and localStorage.

    const handleChanges = e => {
        const {name, value} = e.target;

        setValues({...values, [name]: value});
    };

   return [values, handleChanges];
}

export default useForm;