import React from 'react';
import thumbnail from '../img/thumbnail.jpg'
import './PropsStateLess.css'

// menggunakan props untuk membuat component yg dinamis.
const PropsStateLess =(props)=>{
    return(
        <div className="container">
            <div className="wrapper">
                <div className="imgThumb">
                    <img src={thumbnail} alt=""/>
                </div>
            <p className="time">time: {props.time}</p>
            <p className="title">Title: {props.title}</p>
            <p className="desc">Desc: {props.desc}</p>
            </div>
        </div>
    );
}

// default props
PropsStateLess.defaultProps = {
    time:'00:00',
    title:'unknown',
    desc: 'unknown'
}


export default PropsStateLess;