import axiosClient from "./axiosClient";

const bookApi = {
    getAll: (params) => {
        const url = '';
        return axiosClient.get(url);
    },

    getId: (id) => {
        const url = `${id}`;
        return axiosClient.get(url);
    }, 
    getListByCategory: (category) => {
        const url = `?category=${'css'}`;
        return axiosClient.get(url);
    }
}

export default bookApi;