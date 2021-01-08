import React, {Component} from 'react';
import PropsStateLess from '../../../Function Component/Props/PropsStateLess'
import Product from '../Product/Product';

// HOME ini berfungsi untuk mengumpulkan component lainnya,
//      agar terlihat rapih dan tidak memenuhi component index.js

class HomeForPropsStateLess extends Component{
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
        
            </div>
        )
    }
}



export default HomeForPropsStateLess;