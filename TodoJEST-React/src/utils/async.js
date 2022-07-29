export const GetCallback = (callback) => {
    const name = 'Max'
    
    // simulacion de request http
    setTimeout(() => {
        callback(name)
    }, 200);
}

export const GetPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Max')
        }, 200);
    })
}

export const GetPromiseError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error')
        }, 200);
    })
}

export const GetUser = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await resp.json()
    return user
}
