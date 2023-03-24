
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