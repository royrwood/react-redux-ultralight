import { createStore, combineReducers } from 'redux';

// Define Action enums
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const ADDD_BIKE = 'ADD_BIKE';

// Create action creator functions
export function addUser(user) {
    store.dispatch({ type:ADD_USER, user:user })
};

// Create Users action implementations and reducer
const INITIAL_USERS = {
    roy: 'Roy',
    ben: 'Ben',
    dan: 'Dan'
}

const addUserImpl = function(state, userObj) {
    return { ...state, [userObj.id]: userObj.name};
};
const removeUserImpl = function(state, user) {
    var cloneState = Object.assign({}, state);
    if (cloneState.hasOwnProperty(user.id)) {
        delete cloneState[user.id];
    }
    return cloneState;
};

// http://redux.js.org/docs/basics/Reducers.html
function usersReducer(state = INITIAL_USERS, action) {
    if (action.type === ADD_USER) {
        return { ...state, [action.user.id]: action.user.name};
    }
};


// Create Bikes action implementations and reducer

// const initialBikes = {
//     trek: 'Top Fuel 8',
// }
// const addBikeImpl = function(state, bikeObj) {
//     return { ...state, [bikeObj.id]: bikeObj.name};
// }
// const bikesReducer = createReducer({
//     [addBike]: addBikeImpl,
// }, initialBikes);


// // Create full reducer
// const reducers = combineReducers({
//     usersState: usersReducer,
//     bikesState: bikesReducer
// });


// Create data store
export const store = createStore(usersReducer);
