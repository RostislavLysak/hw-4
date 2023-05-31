export const isEmail = (value) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!pattern.test(value))
        return 'Invalid email'
}

export const isName = (value) => {
    const pattern = /^[A-Za-z]{2,}$/;

    if (!pattern.test(value))
        return 'Invalid name'
}

export const isPassword = (value) => {
    const pattern = /^(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,10}$/;

    if (!pattern.test(value))
        return 'Invalid password'
}