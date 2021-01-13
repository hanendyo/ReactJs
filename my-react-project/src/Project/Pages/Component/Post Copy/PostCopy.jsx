import React from 'react';
import './PostCopy.css'

const Post =(props)=>{
    console.log(`props: `,props);

    return(
        <div className="post">
            <div className="imgThumb">
                <img src='http://placeimg.com/200/150/animals' alt=""/>
            </div>
            <div className="content">
              <div className="title" >{props.data.title}</div>
              <div className="desc">{props.data.body}</div>
              <button className='removeBtn' onClick={()=>props.remove(props.data.id)}>remove</button>
              <button className='updateBtn' onClick={()=>props.update(props.data)}>update</button>
              <button className='detailBtn' onClick={()=>props.detail(props.data.id)}>detail</button>
            </div>
        </div>

    )
}

export default Post;