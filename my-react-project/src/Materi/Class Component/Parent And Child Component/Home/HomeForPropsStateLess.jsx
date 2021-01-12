import React, {Component} from 'react';
import PropsStateLess from '../../../Function Component/Props/PropsStateLess'
import Product from '../Product/Product';
import LifeCycleComp from '../../Life Cycle Component/LifeCycleComp';
import BlogPost from '../../Stateful API calling/BlogPost/BlogPost';

// HOME ini berfungsi untuk mengumpulkan component lainnya,
//      agar terlihat rapih dan tidak memenuhi component index.js

class HomeForPropsStateLess extends Component{

    state = {
        showComponent: true
    }

    componentDidMount(){

    }

    render(){
        return (
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
        )
    }
}



export default HomeForPropsStateLess;