import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
    const [inputs, setInputs] = useState(initial);
    const initialValues = Object.values(initial).join('');

    useEffect(() => {
        setInputs(initial);
    }, [initialValues]);

    function handleChange(e) {
        let { name, value, type } = e.target;
        
        if ( type === 'number' ) {
            value = parseInt(value);
        }
        
        if ( type === 'file' ) {
            [ value ] = e.target.files;
        }

        setInputs({
            // copying the existing state
            ...inputs,
            // setting the new state dynamically
            [name]: value
        })
    }

    function resetForm() {
        setInputs(initial);
    }

    function clearForm() {
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
        setInputs(blankState);
    }

    // have to return the data from this hook
    return {
        inputs,
        handleChange,
        resetForm,
        clearForm
    }
}

