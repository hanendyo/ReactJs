import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import './HomeForCompoentCopy.css'

// import PropsStateLess from '../../../Function Component/Props/PropsStateLess'
import App from '../../App';
import Product from '../Pages/Container/Product Copy/ProductCopy';
import LifeCycleComp from '../Pages/Container/Lifecycle Copy/LifecycleCopy';
import BlogPost from '../Pages/Container/BlogPost Copy/BlogPostCopy';
import YoutubeCopy from '../Pages/Container/Youtube Copy/YoutubeCopy';
import DetailPost from '../Pages/Container/BlogPost Copy/Detail Post Copy/DetailPost'

// HOME ini berfungsi untuk mengumpulkan component lainnya,
//      agar terlihat rapih dan tidak memenuhi component index.js

class Home extends Component{

    state = {
        showComponent: true
    }

   

    render(){
        return (

            <Router>

     
            <Fragment>
                <div className='navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/blogpost">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/youtube">YouTube</Link>
                    <Link to="/lifecyclecomp">Lifecycle Component</Link>
                    <Link to="/detailpost/:id">Detail Post</Link>
                    
                </div>
                <Route path='/'  exact component={App} />
                <Route path='/blogpost' component={BlogPost} />
                <Route path='/product' component={Product} />
                <Route path='/youtube' component={YoutubeCopy} />
                <Route path='/lifecyclecomp' component={LifeCycleComp} />
                <Route path='/detailpost/:id' component={DetailPost} />
            </Fragment>

            </Router>
        )
    }
}



export default Home;



