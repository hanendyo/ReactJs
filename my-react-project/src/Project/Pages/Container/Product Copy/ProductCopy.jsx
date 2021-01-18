// REDUX
import React, {Component, Fragment} from 'react';
import Trolley from '../../../img/trolley.png'
import './ProductCopy.css'
import CardProduct from './Card Product Copy/CardProductCopy';
import { connect } from 'react-redux';



class Product extends Component{

    //state 
    // state = {
    //     order: 4
    // }


    //method
    // handleCounterChangeProduct=(newValue)=>{
    //     this.setState({
    //         order: newValue
    //     })
    // }

                    

    render(){
        console.log(this);
        return(
            <Fragment>
                <h1>Product</h1>
                    <div className="header">
                        <div className="logo">
                            <img src="" alt=""/>
                        </div>
                        <div className="trolley">
                            <img src={Trolley} alt=""/>
                            <div className="count">{this.props.order}</div>
                        </div>
                    </div>
                <CardProduct/>
            </Fragment>
        )
    

    }
}



const mapStateToProps =(state)=>{
    console.log(`stateorder:`, state.totalOrder);
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (Product);





// // CONTEXT
// import React, {Component, Fragment} from 'react';
// import Trolley from '../../../img/trolley.png'
// import './ProductCopy.css'
// import CardProduct from './Card Product Copy/CardProductCopy';
// import { GlobalConsumer } from '../../../../Context/Context';



// class Product extends Component{

//     render(){
//         console.log(`this:`, this);
//         return(
//             <Fragment>
//                 <h1>Product</h1>
//                     <div className="header">
//                         <div className="logo">
//                             <img src="" alt=""/>
//                         </div>
//                         <div className="trolley">
//                             <img src={Trolley} alt=""/>
//                         <div className="count">{this.props.state.totalOrder}</div>
//                     </div>
//                 </div>
//                 <CardProduct/>
//             </Fragment>
           
//         )
    

//     }
// }


// export default GlobalConsumer (Product);

