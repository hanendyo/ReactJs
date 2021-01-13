import React, { Component } from 'react';
import Babi from '../../../../img/porkBelly.jpg'
import Counter from './Counter/Counter';

class CardProduct extends Component {
    render(){
        // console.log(this);
        return(
            <div className="card">
                <div className="img-thumb-product">
                    <img src={Babi} alt=""/>
                </div>
                <p className="product-title">Pork Belly</p>
                <p className="product-price">Rp 10000</p>
               <Counter/>
            </div>
        )
    }
}




export default CardProduct;
 