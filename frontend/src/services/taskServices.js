//import axios from "axios";
//const apiUrl = process.env.REACT_APP_BACKEND_URL //"http://localhost:8080/api/tasks";
//console.log(apiUrl)
//export function getTasks() {
//    return axios.get(apiUrl);
//}

//export function addTask(task) {
//    return axios.post(apiUrl, task);
//}

//export function updateTask(id, task) {
//    return axios.put(apiUrl + "/" + id, task);
//}

//export function deleteTask(id) {
//    return axios.delete(apiUrl + "/" + id);
//}


// frontend/src/services/taskServices.js

import axios from "axios";

// Correct API base URL (to your backend route)
const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/tasks`;

console.log("API URL:", apiUrl);

export function getTasks() {
  return axios.get(apiUrl);
}

export function addTask(task) {
  return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
  return axios.put(`${apiUrl}/${id}`, task);
}

export function deleteTask(id) {
  return axios.delete(`${apiUrl}/${id}`);
}
