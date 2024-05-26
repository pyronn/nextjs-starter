export const userService = {
    authenticate
}

function authenticate(username: string, password: string) {
    console.log('authenticate', username, password)
    if (username != 'admin' && password !== 'admin') {
        return null
    }
    const user = {
        id: 1,
        username: 'admin',
        name: 'web admin',
        email: 'admin@test.com',
    }
    return user

}

export type User = {
    id?: string | null;
    name?: string | null;
    email?: string | null;
}

