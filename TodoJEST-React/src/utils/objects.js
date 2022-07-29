export const Objects = () => {
    let arr = []

    return {
        adds: (data) => {
            arr = [ ...arr, data]
        },
        getData: () => {
            return arr
        },
        getDataById: (id) => {
            return arr.filter(item => item.id === id)
        }
    }
}