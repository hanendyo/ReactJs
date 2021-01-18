import React, { Component, useEffect, useState } from 'react'

// class Hooks extends Component {

//     state = {
//         count: 0
//     }

//     onUpdate =()=> {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     // LIFECYCLE
//     componentDidMount(){
//         document.title = `Title Count: ${this.state.count}`
//     }

//     componentDidUpdate(){
//         document.title = `Title Count: ${this.state.count}`
//     }

//     componentWillUnmount(){
//         document.title = `My React App`
//     }
//     // 

//     render(){
//         return(
//             <div>
//                 <p>nilai saya sekarang: {this.state.count}</p>
//                 <button onClick={this.onUpdate}>tekan saya!</button>
//             </div>
//         )
//     }
// }

// export default Hooks;


// SIMPLE HOOKS
const Hooks =()=> {

    // count berfungsi sebagai state. 
    // setCount berfungsi seperti setState.
    const [count, setCount] = useState(0); 

    // hooks/useEffect --> ketika didMount maka otomatis didUpdate.
    useEffect(()=>{
        document.title = `Title Count: ${count}`;
        return (()=>{ //--> return == willUnmount.
            document.title = `My React App`
        });
    })

    console.log(`count: `, count);
    return(
        <div>
            <p>nilai saya sekarang: {count}</p>
            <button onClick={()=> setCount(count + 1)}>tekan saya!</button>
        </div>
    )

}

export default Hooks;