import axios from 'axios';

const url = "http://localhost:8080/api"

export function getAllAutos () {
    return axios.get(url + '/auto')
        .then(res => res.data)
}

export function createAuto (user) {
    return axios.post(url + '/auto', user)
}

export function updateState (id) {
    return axios.put(url + '/auto/'+id)
}