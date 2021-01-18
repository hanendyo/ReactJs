import React, { Children, Component, createContext } from 'react'

// Provider
const RootContext = createContext();
const Provider = RootContext.Provider; 

const GlobalProvider =(Children)=> {
    return(
        class ParentComponent extends Component {
            
    state = {
        totalOrder: 0
     }
 
     dispatch =(action)=> {
         switch(action.type){
             case 'PLUS_ORDER':
               return (
 
                   this.setState({
                       totalOrder: this.state.totalOrder + 1
                   })
 
               )
             case 'MINUS_ORDER':
             //   let totalOrder = 0;
             //   if(this.state.totalOrder > 0){
             //     totalOrder = this.state.totalOrder - 1  
             //   }
               return (
 
                 this.setState({
                     totalOrder: this.state.totalOrder -1
                 })
              
                 )
             case 'CHANGE_COUNT':
               return (
                 
                 this.setState({
                     totalOrder: this.state.totalOrder + 1
                 })
 
               )
               default:
                 return this.state;   
           }
     }
            render(){
                return(
                    // global state
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer =(Children)=>{
    return(
        class ParentConsumer extends Component {
            render(){
                return(
                    <Consumer>
                        {
                            (value) => {
                                return(
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                )
            }

        }

    )
}