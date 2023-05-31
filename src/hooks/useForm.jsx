import { useState } from "react"

export const useForm = ({ defaultValues = {}, validation = {} } = {}) => {
    const [values, setValues] = useState(defaultValues)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        const validate = validation[name];

        if (validate) {
            setErrors({ ...errors, [name]: validate(value) })
        }

        setValues({ ...values, [name]: value });
    };


    function handleSubmit(fn) {
        return function (e) {
            e.preventDefault();

            const result = []

            for (const [key, value] of Object.entries(values)) {
                result.push(validation[key](value))
            }

            if (result.some(Boolean)) return

            fn(values)
        }
    }

    return {
        values, errors, handleChange, handleSubmit
    }
}
