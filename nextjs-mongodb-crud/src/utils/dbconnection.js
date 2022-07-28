import { connect, connection } from 'mongoose'

const conn = {
    isconnected: false
}

export async function dbConnection() {
    if (conn.isconnected) { return }
    const db = await connect(process.env.MONGODB_URL)
    conn.isconnected = db.connections[0].readyState
}

connection.on('connected', () => {
    console.log('Conected ok')
})

connection.on('error', (err) => {
    console.log('Conection Error: ', err)
})