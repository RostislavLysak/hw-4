import './RegisterForm.css'
import Form from '../Form'
import Button from "../Button";
import InputField from '../InputField';
import { isEmail, isName, isPassword } from '../../plugins/validations'
import { useForm } from "../../hooks/useForm";
import { createUser } from '../../plugins/api';

export default function RegisterForm() {
    const { values, errors, handleChange, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            secondName: "",
            email: "",
            password: ""
        },
        validation: {
            email: isEmail,
            firstName: isName,
            secondName: isName,
            password: isPassword
        }
    });

    const getFieldProps = (name) => {
        return {
            name,
            value: values[name],
            onChange: handleChange,
            helperText: errors[name]
        }
    }

    const submit = handleSubmit(async (values) => {
        await createUser(values)

        alert('Operation success')
    })

    return (
        <Form onSubmit={submit} className='RegisterForm' title='Register Form'>
            <InputField
                {...getFieldProps('firstName')}
                label='First Name:'
                type="text"
                required={true}
            />
            <InputField
                {...getFieldProps('secondName')}
                label='Second Name:'
                type="text"
                required={true}
            />
            <InputField
                {...getFieldProps('email')}
                label='Email:'
                type="email"
                required={true}
            />
            <InputField
                {...getFieldProps('password')}
                label='Password:'
                type="text"
                required={true}
            />
            <Button type="submit">Submit</Button>
        </Form>
    );
}