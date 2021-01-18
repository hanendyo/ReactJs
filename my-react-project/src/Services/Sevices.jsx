import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from './Delete'


// GET
const getBlogPost =()=> Get(`posts?_sort=id&_order=desc`, false);
const getComments =()=> Get(`comments`, true);


// POST
const postBlogPost =(data)=> Post(`posts`, false, data)


// PUT
const putBlogPost =(data, id)=> Put(`posts/${id}`, false, data)


// DELETE
const deleteBlogPost =(id)=> Delete(`posts/${id}`, false)



const API = {
    getBlogPost,
    getComments,
    postBlogPost,
    putBlogPost,
    deleteBlogPost
}

export default API;