export const userRegister = async ({username, password, name}) => {
    return await fetch('${import.meta.env.VITE_API_PATH}/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            name,
        }),
    })
}