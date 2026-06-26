import axios from "axios";

const API_URL = "http://localhost:8080/student";

export const getAllStudents = () => {
    return axios.get(`${API_URL}`);
};

export const addStudent = (student) => {
    return axios.post(`${API_URL}`, student);
};

export const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
};

export const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const getStudentById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};