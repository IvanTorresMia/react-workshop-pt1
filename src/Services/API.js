import axios from "axios";


const baseURL = 'http://localhost:3000/Tasks';

const API = {
    getAll: function() {
        return axios.get(baseURL);
    },
   createJournal: (newTask) => {
        return axios.post(baseURL, newTask);
   },
   getJournalById: (id) => {
       return axios.get(`${baseURL}/${id}`);
   },
   deleteJournal: (id) => {
       return axios.delete(`${baseURL}/${id}`)
   },
   updateJournal: (id, updatedTask) => {
       return axios.put(`${baseURL}/${id}`, updatedTask)
   }

   
}


export default API;