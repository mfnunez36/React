export const Suma = (a, b) => {
  return (a + b)
}

export const Resta = (a, b) => {
    return a - b
}

export const Division = (a, b) => {
    return a / b
}

export const Multiplicacion = (a, b) => {
    return a * b
}

export const GetRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}