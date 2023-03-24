import axios from 'axios'

export const url = 'https://ws.biznestadbir.uz/'

export const create = async (data) => {
    return await axios.post(url + 'api/items/', data).then(res => {
        return res
    })
}

export const fetchGet = async (page = 1) => {
    return await axios.get(url + `api/items/?page=${page}`)
}
export const updated = async (id, notes) => {
    return await axios.patch(url + `api/items/${id}`, notes)
}