export default function Form({ title, children, onSubmit, className }) {
    return (
        <form onSubmit={onSubmit} className={className}>
            <fieldset>
                <legend>{title}</legend>
                {children}
            </fieldset>
        </form>
    );
}