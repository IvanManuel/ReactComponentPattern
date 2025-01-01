import { ChangeEvent, FormEvent, useState } from "react";

interface FormState {
    name: string;
    email: string;
    password1: string;
    password2: string;
}

interface UseFormReturn {
    name: string;
    email: string;
    password1: string;
    password2: string;
    formData: FormState;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
    isValidEmail: (email: string) => boolean;
}

export const useForm = ( initialState: FormState ) : UseFormReturn => {

    const [formData, setFormData] = useState( initialState );

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const resetForm = () => {
        setFormData({ ...initialState })
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return {
        ...formData,
        // properties
        formData,

        //methods
        onChange,
        resetForm,
        isValidEmail,
        onSubmit
    }
}
