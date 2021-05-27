import axiosInstance from './axios';

export const getAllMovies = () => {
    return axiosInstance.get('movies/count', {headers: {Authorization: `Bearer ${localStorage.getItem('jwt-token')}`}})
        .then(r => {
            return axiosInstance.get(`movies?size=${r?.data}`, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt-token')}`}})
        })
}

export const getAllMoviesWithPagination = (pageSize, currentPage) => {
    return axiosInstance.get(`movies?size=${pageSize}&page=${currentPage}`, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt-token')}`}})
}

export const deleteMovie = (movieId) => {
    return axiosInstance.delete(`movies/${movieId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt-token')}`}})
}

export const getMovie = (movieId) => {
    return axiosInstance.get(`movies/${movieId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt-token')}`}})
}

export const addMovie = (data) => {
    return axiosInstance.post(`movies`, data, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt-token')}`}})
}

export const editMovie = (data) => {
    console.log(data);
    return axiosInstance.put(`movies`, data, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt-token')}`}})
}