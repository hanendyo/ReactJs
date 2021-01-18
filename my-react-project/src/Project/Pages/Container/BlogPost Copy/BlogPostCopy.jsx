import React, { Component, Fragment } from 'react'
import './BlogPostCopy.css'
import axios from 'axios'
import Post from '../../Component/Post Copy/PostCopy'
import API from '../../../../Services/Sevices'


class BlogPost extends Component{

    state={
        post: [],
        comment: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: '',
            body: ''
        },
        isUpdate: false
    }


    // method

    // AXIOS
    // axios.get = GET DATA
    // axios.post = POST DATA
    // axios.delete = DELETE DATA
    // axios.put = EDIT DATA



    // mengambil data API
    getPostAPI =()=> {
        API.getBlogPost()
        .then(result => {
            this.setState({
                post: result
            })
        })

        API.getComments()
        .then(result=>{
            this.setState({
                comment: result
            })
        })
   
    }
    
   
    postDataToAPI =()=> {
        API.postBlogPost(this.state.formBlogPost)
        .then(response => {
            this.handleFormChangeClear();
            this.getPostAPI(); //--> get API setelah post data ke API.
        }, err => {
            console.log(err);
        })
    }


    putDataToAPI =()=> {
        API.putBlogPost(this.state.formBlogPost, this.state.formBlogPost.id)
        .then(response => {
            this.handleFormChangeClear();
            this.getPostAPI();    

        }, err => {
            console.log(err);
        })
    } 
       
    


    // HANDLE
    
        //handle ketika ada perubahan 
        handleFormChange =(e)=> {
            
            let formBlogPostNew = {...this.state.formBlogPost};
            let timeStamp = new Date().getTime();
            
            //e.target.name --> mengambil value dari name 
            formBlogPostNew[e.target.name] = e.target.value; 
            
            if(!this.state.isUpdate){
                formBlogPostNew['id'] = timeStamp; 
            }

            
            this.setState({
                formBlogPost: formBlogPostNew
            })
            
            //-------------------------------------------------------------
            // console.log(`form event: `, e);
            // console.log(`form target OLD: `, e.target);
            // console.log(`form name OLD: `, e.target.name);
            // console.log(`form value: `, e.target.value);
            // console.log(`form name NEW: `,formBlogPostNew[e.target.name]);
            // console.log(`fblp: `, this.state.formBlogPost);
            // console.log(`fblpn: `, formBlogPostNew);
            //-------------------------------------------------------------
            
        }

        // untuk detail post
        handleDetail =(id)=>{
            console.log(this.props);

            // props yg dikirimkan oleh react-router untuk pindah link
            this.props.history.push(`/detailpost/${id}`);
        }
        
        // untuk update
        handleUpdate =(data)=>{
            console.log(data);
            this.setState({
                formBlogPost: data,
                isUpdate: true
        })
        
    }

        // untuk mensubmit
        handleSubmit=()=>{
            if(this.state.isUpdate){
                this.putDataToAPI();
            } else {
                this.postDataToAPI();
            }
            
        }

        
        // DELETE
        // untuk mendelete 
        handleRemove =(id)=> {
            API.deleteBlogPost(id)
            .then(response => {
                this.getPostAPI(); //--> meng-GET API lagi setelah menghapus (edit/update) sesuatu.)
            })
        }
    
        //clear textarea dan input (termasuk state)
        handleFormChangeClear = ()=>{
            let formBlogPostClear = {...this.state.formBlogPost};
            formBlogPostClear['id'] = '';
            formBlogPostClear['userId'] = '';
            formBlogPostClear['title'] = '';
            formBlogPostClear['body'] = '';
            
            this.setState({
                formBlogPost:formBlogPostClear,
                isUpdate:false
            },
            (err)=>console.log(`err: `, err))
            console.log(`state clear: `, this.state.formBlogPost);
        }
    
    // LIFECYCLE
    componentDidMount(){
        // AXIOS
        // GET
        this.getPostAPI();


        //-------------------------------------------------------------
        // FETCH
        // fetch('http://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // ------------------------------------------------------------
    }


    
    render(){
        return(
            <Fragment>


                <h1 className="section-title">Blog Post</h1>

                <div className="form-add-post">
                    <label htmlFor="title" name="title" >Title</label>
                    {/* memberikan "onChange" pada tag input */}
                    <input type="text" value={this.state.formBlogPost['title']} name="title" id=""  placeholder="add title" onChange={this.handleFormChange}/> 
                    <label htmlFor="body">Blog content</label>
                    {/* memberikan "onChange" pada tag textarea */}
                    <textarea name="body" value={this.state.formBlogPost['body']} id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>submit</button>
                </div>    

                {/* {
                    this.state.comment.map(m => {
                        return(
                            <div>
                                <p>id: {m.id}</p>
                                <p>name: {m.name}</p>
                                <p>email: {m.email}</p>
                                <p>comment: {m.body}</p>
                            </div>
                        )
                    })
                } */}

                {
                    this.state.post.map(m => {
                        // menyederhanakan beberapa props menjadi satu (data={m})
                        return <Post key={m.id} data={m} remove={this.handleRemove } update={this.handleUpdate} detail={this.handleDetail}/>
                    })
                }
                
            

            </Fragment>
        
            )
    }
}

export default BlogPost;