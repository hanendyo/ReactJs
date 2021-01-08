import React, {Component, Fragment} from 'react';
import Trolley from '../../img/trolley.png'
import './Product.css'
import CardProduct from '../Card Product/CardProduct';



class Product extends Component{

    //state 
    state = {
        order: 4
    }


    //method
    handleCounterChangeProduct=(newValue)=>{
        this.setState({
            order: newValue
        })
    }

                    

    render(){
        console.log(this);
        return(
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <div className="trolley">
                    <img src={Trolley} alt=""/>
                    <div className="count">{this.state.order}</div>
                </div>
            </div>
           <CardProduct  onCounterChange={(value)=> this.handleCounterChangeProduct(value)}/>
            </Fragment>
        )
    

    }
}

export default Product;



