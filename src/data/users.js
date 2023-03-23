

// const arr = [
//     {
//         id: 1,
//         status: 'Störung',
//         img: 'https://static-cse.canva.com/blob/847064/29.jpg',
//         description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old'
//     },
//     { id: 2, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 3, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 4, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 5, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 6, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 7, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 8, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 9, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 10, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 11, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 12, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 13, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 14, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 15, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 16, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 17, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 18, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 19, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 20, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 21, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 22, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 23, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 24, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 25, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 26, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 27, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 28, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 29, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 30, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 31, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 32, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 33, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 34, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 35, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 36, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 37, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 38, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 39, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 40, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 41, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 42, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 43, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 44, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 45, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 46, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 47, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 48, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 49, status: 'Störung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 50, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 51, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 52, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 53, status: 'Anweisung', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 54, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
//     { id: 55, status: '', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old' },
// ]

export const getUsers = (arr, page, limit) => {
    let array = []
    for (let i = (page - 1) * limit; i < (page * limit); i++) {
        array.push(arr[i])
    }
    console.log(arr, page, limit)
    return array
}

export const getLength = (arr) => {
    return arr?.length
}

export const machine = [
    { name: 'E 35 - 1', id: 1 },
    { name: 'E 45 - 2', id: 2 },
    { name: 'E 45 - 1', id: 3 },
    { name: 'E 50 - 2', id: 4 },
    { name: 'E 50 - 3', id: 5 },
    { name: 'EM 50 - 1', id: 6 },
    { name: 'EM 50 - 2', id: 7 },
    { name: 'EM 50 - 3', id: 8 },
    { name: 'EM 55 - 1', id: 9 },
    { name: 'E 80 - 1', id: 10 },
    { name: 'E 120 - 1', id: 11 },
    { name: 'KM 150 - 1', id: 12 },
    { name: 'KM 80 - 1', id: 13 },
    { name: 'KM 50 - 1', id: 14 },
    { name: 'KM 420 - 1', id: 15 },
    { name: 'F 150iA - 1', id: 16 },
    { name: 'F 250iA - 1', id: 17 },
    { name: 'F 450iA - 1', id: 18 }
]

export const statusData = [
    { name: 'Anweisung', id: 'anweisung' },
    { name: 'Info', id: 'info' },
    { name: 'Störung ohne Ausfall', id: 'storung_ohne_ausfall' },
    { name: 'Störung mit Ausfall', id: 'storung_mit_ausfall' },
    { name: 'Qualitätsabweichung', id: 'qualitatsabweichung' }
]