import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import './HomeForCompoent.css'

// import PropsStateLess from '../../../Function Component/Props/PropsStateLess'
import Product from '../Product/Product';
import LifeCycleComp from '../../Life Cycle Component/LifeCycleComp';
import BlogPost from '../../Stateful API calling/BlogPost/BlogPost';
import App from '../../../../App';

// HOME ini berfungsi untuk mengumpulkan component lainnya,
//      agar terlihat rapih dan tidak memenuhi component index.js

class HomeForComponent extends Component{

    state = {
        showComponent: true
    }

    componentDidMount(){

    }

    render(){
        return (

            <Router>

     
            <Fragment>
                <div className='navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/blogpost">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecyclecomp">Lifecycle Component</Link>
                </div>
                <Route path='/'  exact component={App} />
                <Route path='/blogpost' component={BlogPost} />
                <Route path='/product' component={Product} />
                <Route path='/lifecyclecomp' component={LifeCycleComp} />
            </Fragment>

            </Router>
        )
    }
}



export default HomeForComponent;





// backup
       {/* <Fragment>
            <div>
                <h1>Props component</h1>
                <PropsStateLess 
                time='13:30' 
                title='how-to-thumbnail #1' 
                desc='how to create thumbnail properly.'/>
                <PropsStateLess 
                time='03:10' 
                title='how-to-thumbnail #2' 
                desc='how to create thumbnail properly.'/>
                <PropsStateLess 
                time='10:40' 
                title='how-to-thumbnail #3' 
                desc='how to create thumbnail properly.'/>
                <PropsStateLess />
                <hr/>

                <h1>Parent and child component</h1>
                <Product/>
                <hr/>

                <h1>Life Cycle Component</h1>
                {
                    this.state.showComponent ? <LifeCycleComp/> : null
                }
                <hr/>

                <h1>API calling</h1>
                <BlogPost/>
                <hr/>
        
            </div>
            </Fragment> */}