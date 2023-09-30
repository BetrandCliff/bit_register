import axios from "axios";

 const axiosexports= {
    get:axios.get,
    post:axios.post,
    delete:axios.delete,
    put:axios.put,
    patch:axios.patch
 }
 export default axiosexports
 
 export const headers={
   "Content-Type":"multipart/form-data|application/json|File"
 }