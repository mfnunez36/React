export const Primitivos = (exp) => {
    switch (exp) {
        case 'definido':
            return { ok: 'ok' }
        case 'indefinido':
            return undefined
        case 'verdadero':
            return true
        case 'falso':
            return false
        default:
            return null
    }
} 