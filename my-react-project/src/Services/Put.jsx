import axios from 'axios'
import { OnlinePath, RootPath } from './Config'

const Put =(path, root, data)=> {
    const promise = new Promise((resolve, reject) =>{
        axios.put(`${root ? OnlinePath : RootPath}/${path}`, data)
        .then((result)=>{
            resolve(result.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Put;