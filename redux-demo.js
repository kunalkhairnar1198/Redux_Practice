// Exploring redux core concepts
 //Reducer function is a standard js function it will call in redux is the call existing state and cureent state and return new state object
 //Reducer function is pure function
const redux = require('redux')


const counterReducer = (state={counter:0}, action)=>{
    if(action.type === 'increment'){
           
        return{ 
            counter : state.counter + 5
            }

    }else if(action === 'decrement'){
        
       return{
           counter : state.counter - 1
           }
    }
    
    return state
}

const store = redux.createStore(counterReducer);

console.log(store.getState())

const counterSubscriber =()=>{
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

for(let i = 0; i < 5; i++){
    store.dispatch({type:'increment'})
}

store.dispatch({type: 'decrement'})