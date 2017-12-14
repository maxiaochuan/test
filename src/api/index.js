import {
    get,
    post,
    deletes,
    put
} from './api'


export const AxiosIndexList = () => {
    let path = 'users'
    return get(path)
}

export const AxiosDeleteUser = (id) => {
    let path = `users/${id}`
    return deletes(path)
}

export const AxiosUpdateUser = (id, datas) => {
    let path = `users/${id}`
    return put(path, datas)
}

export const AxiosCreateUser = (datas) => {
    let path = `users`
    return post(path, datas)
}