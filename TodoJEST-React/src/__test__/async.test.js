/* eslint-disable jest/no-conditional-expect */
import { GetCallback, GetPromise, GetPromiseError, GetUser } from '../utils/async'

describe('Probando callback asyncrono', () => {
    test('Probando callback', (done) => {
        GetCallback((name) => {
            expect(name).toBe('Max')
            done()
        })
    })

    test('Probando Promise', (done) => {
        GetPromise()
        .then((name) => {
            expect(name).toBe('Max')
            done()
        })
    })

    test('Probando Promise con expect', () => {
        return expect(GetPromise()).resolves.toBe('Max')
    })

    test('Probando Promise Error', (done) => {
        GetPromiseError()
        .then((name) => {
            expect(name).toBe('Max')
            done()
        }).catch((error) => {
            expect(error).toBe('Error')
            done()
        })
    })

    test('Probando Promise Error con expect', () => {
        return expect(GetPromiseError()).rejects.toBe('Error')
    })

    test('Probando Promise async y await', async () => {
        const name = await GetPromise()
        expect(name).toBe('Max')
    })

    test('Probando Promise Error async y await', async () => {
        try {
            const name = await GetPromiseError()
            expect(name).toBe('Max')
        } catch (error) {
            expect(error).toBe('Error')
        }
    })

    test('Probando request Http async', async () => {
        const user = await GetUser()
        expect(user).toHaveProperty('username')
    })
})