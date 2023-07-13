import axiosClient from "./axiosClient";

const studentApi = {
    getAll: (params) => {
        const url = 'students';
        return axiosClient.get(url, { params });
    },

    getId: (id) => {
        const url = `students/${id}`;
        return axiosClient.get(url);
    },    
}

export default studentApi;