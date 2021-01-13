import React, { Component, Fragment } from 'react'
import axios from 'axios'

class DetailPost extends Component {

    state = {
        post: {
            title: '',
            body:''
        }
    }
    
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`)
        .then(res => {
            console.log(`res: `, res);
            let post = res.data;
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    
    }
    render(){
        return(
            <Fragment>
                <h1>Detail Post</h1>
                <div className=''>
                    <div className="thumbnail">
                        <img src="" alt=""/>
                    </div>
                    <p>{this.state.post.title}</p>
                    <p>{this.state.post.body}</p>
                </div>
            </Fragment>
        )
    }    
}

export default DetailPost;