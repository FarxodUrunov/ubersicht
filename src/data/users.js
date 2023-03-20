const arr = [
    { id: 1, status: 'Störung' },
    { id: 2, status: '' },
    { id: 3, status: '' },
    { id: 4, status: '' },
    { id: 5, status: 'Anweisung' },
    { id: 6, status: '' },
    { id: 7, status: 'Störung' },
    { id: 8, status: '' },
    { id: 9, status: '' },
    { id: 10, status: '' },
    { id: 11, status: 'Anweisung' },
    { id: 12, status: '' },
    { id: 13, status: 'Störung' },
    { id: 14, status: '' },
    { id: 15, status: '' },
    { id: 16, status: '' },
    { id: 17, status: 'Anweisung' },
    { id: 18, status: '' },
    { id: 19, status: 'Störung' },
    { id: 20, status: '' },
    { id: 21, status: '' },
    { id: 22, status: '' },
    { id: 23, status: 'Anweisung' },
    { id: 24, status: '' },
    { id: 25, status: 'Störung' },
    { id: 26, status: '' },
    { id: 27, status: '' },
    { id: 28, status: '' },
    { id: 29, status: 'Anweisung' },
    { id: 30, status: '' },
    { id: 31, status: 'Störung' },
    { id: 32, status: '' },
    { id: 33, status: '' },
    { id: 34, status: '' },
    { id: 35, status: 'Anweisung' },
    { id: 36, status: '' },
    { id: 37, status: 'Störung' },
    { id: 38, status: '' },
    { id: 39, status: '' },
    { id: 40, status: '' },
    { id: 41, status: 'Anweisung' },
    { id: 42, status: '' },
    { id: 43, status: 'Störung' },
    { id: 44, status: '' },
    { id: 45, status: '' },
    { id: 46, status: '' },
    { id: 47, status: 'Anweisung' },
    { id: 48, status: '' },
    { id: 49, status: 'Störung' },
    { id: 50, status: '' },
    { id: 51, status: '' },
    { id: 52, status: '' },
    { id: 53, status: 'Anweisung' },
    { id: 54, status: '' },
    { id: 55, status: '' },
]

export const getUsers = (page, limit) => {
    let array = []
    for (let i = (page - 1) * limit; i < (page * limit); i++) {
        array.push(arr[i])
    }
    return array
}

export const getLength = () => {
    return arr.length
}