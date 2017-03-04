import { createStore, combineReducers } from 'redux';

// Define the strings we will use as the identifying 'type' property for our Actions
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const ADD_BIKE = 'ADD_BIKE';

// Define the initial state of the users subtree of the state
const INITIAL_USERS = {
    roy: 'Roy',
    ben: 'Ben',
    dan: 'Dan'
};

// Define the reducer that manages state for the users subtree of the state
function usersReducer(state = INITIAL_USERS, action) {
    if (action.type === ADD_USER) {
        const newState = { ...state, [action.user.id]: action.user.name };
        return newState;
    }
    else if (action.type === REMOVE_USER) {
        const newState = Object.assign({}, state);
        if (newState.hasOwnProperty(action.user.id)) {
            delete newState[action.user.id];
        }
        return newState;
    }
    else {
        return state;
    }
}


// Define the initial state of the bikes subtree of the state
const INITIAL_BIKES = {
    trek: 'Top Fuel 8',
};

// Define the reducer that manages state for the bikes subtree of the state
function bikesReducer(state = INITIAL_BIKES, action) {
    if (action.type === ADD_BIKE) {
        const newState = { ...state, [action.bike.id]: action.bike.name };
        return newState;
    }
    else {
        return state;
    }
}


// Create the full reducer for the store
const reducers = combineReducers({
    users: usersReducer,
    bikes: bikesReducer
});

// Create the data store
export const store = createStore(reducers);


// Define and export the action functions that create and dispatch store actions
export function addUser(user) {
    store.dispatch({ type:ADD_USER, user:user })
}
export function removeUser(user) {
    store.dispatch({ type:REMOVE_USER, user:user })
}
export function addBike(bike) {
    store.dispatch({ type:ADD_BIKE, bike:bike })
}
