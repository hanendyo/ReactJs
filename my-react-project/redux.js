const redux = require('redux');
const createStore = redux.createStore;

// state
const initialState = {
    value: 0,
    age: 14
}

// reducer (satu2nya fungsi yg bisa mengubah store)
const rootReducer =(state = initialState, action)=>{

    switch(action.type) {
        case 'ADD_AGE':
            return{
                ...state, //--> copy-an state 
                age: state.age + 1
            }
        // break;    
        case 'CHANGE_VALUE':
            return{
                ...state,
                value: state.value + action.newValue
            }
        // break;
        default:
            return state;    
    }

}


// store (global state)
const store = createStore(rootReducer);
console.log(`old state: `, store.getState());


// subscription (proses pemanggilan store)
store.subscribe(()=>{
    console.log('storage change: ', store.getState());
})


// dispatching action (proses pemanggilan reducer) 
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 13})
console.log(`new state: `,store.getState());
