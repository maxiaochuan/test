import axios from 'axios'

axios.defaults.baseURL = 'https://www.mxcins.com/api';
export const get = (path, query) => {
    let url;
    if (query) {
        url = `${path}/${query}`;
    } else {
        url = `${path}`;
    }

    return axios(url)
        .then(res => res.data)
        .catch(err => window.console.error(err))
}

export const post = (path, datas, query) => {
    let url;
    if (query) {
        url = `${path}?${query}`;
    } else {
        url = `${path}`;
    }

    return axios({
        method: 'post',
        url: url,
        data: datas,
    })
        .then(res => res.data)
        .catch(err => window.console.error(err));
};

export const put = (path, datas, query) => {
    let url;
    if (query) {
        url = `${path}?${query}`;
    } else {
        url = `${path}`;
    }

    return axios({
        method: 'put',
        url: url,
        data: datas
    })
        .then(res => res.data)
        .catch(err => window.console.error(err));
};

export const deletes = (path, query) => {
    let url;
    if (query) {
        url = `${path}?${query}`;
    } else {
        url = `${path}`;
    }

    return axios({
        method: 'delete',
        url: url,
    })
        .then(res => res.data)
        .catch(err => window.console.error(err));
};