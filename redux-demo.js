// Exploring redux core concepts
 //Reducer function is a standard js function it will call in redux is the call existing state and cureent state and return new state object
 //Reducer function is pure function
const redux = require('redux')


const counterReducer = (state={counter:0}, action)=>{
    if(action.type === 'INCREMENTBY2'){
           
        return{ 
            counter : state.counter + 2
            }

    }else if(action === 'DECREMENTBY2'){
        
       return{
           counter : state.counter - 2
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

    store.dispatch({type:'INCREMENTBY2'})
    store.dispatch({type:'INCREMENTBY2'})


store.dispatch({type: 'DECREMENTBY2'})