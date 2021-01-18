import axios from 'axios'
import { OnlinePath, RootPath } from './Config'



const Delete =(path, root)=> {
    const promise = new Promise((resolve, reject) =>{
        axios.delete(`${root ? OnlinePath : RootPath}/${path}`)
        .then((result)=>{
            resolve(result.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Delete;


  