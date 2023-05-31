import Input from "../Input"

export default function InputField({ label, type, value, name, onChange, helperText }) {
    return (
        <label>
            {label}
            <Input type={type} value={value} name={name} onChange={onChange} />
            {helperText ? <p>{helperText}</p> : null}
        </label>
    )
}