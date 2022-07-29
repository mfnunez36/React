export const Arrays = () => {
    let arr = []

    return {
        adds: (data) => {
            arr.push(data)
        },
        getData: () => {
            return arr
        }
    }
}
