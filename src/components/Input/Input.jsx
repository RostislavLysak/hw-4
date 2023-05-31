export default function Input({ value, onChange, type, name, required }) {
    return <input type={type} value={value} onChange={onChange} name={name} required={required} />;
}