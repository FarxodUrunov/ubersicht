import axios from 'axios'

const url = 'http://http://192.168.31.182:8000'

const create = (data) => {
    axios.post(url, data)
}