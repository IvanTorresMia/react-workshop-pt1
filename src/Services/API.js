import axios from "axios";


const baseURL = 'http://localhost:3000/Tasks';

const API = {
    getTask: function() {
        return axios.get(baseURL);
    },
   createTask: (newTask) => {
        return axios.post(baseURL, newTask);
   },
   getTaskById: (id) => {
       return axios.get(`${baseURL}/${id}`);
   },
   deleteTask: (id) => {
       return axios.delete(`${baseURL}/${id}`)
   },
   updateTask: (id, updatedTask) => {
       return axios.put(`${baseURL}/${id}`, updatedTask)
   }

   
}


export default API;