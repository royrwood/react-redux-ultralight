import { createStore, combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';

// Create action creator functions
export const addUser = createAction('Add a user');
export const removeUser = createAction('Remove a user');
export const addBike = createAction('Add a bike');


// Create Users action implementations and reducer
const intialUsers = {
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

const usersReducer = createReducer({
    [addUser]: addUserImpl,
    [removeUser]: removeUserImpl,
}, intialUsers);


// Create Bikes action implementations and reducer

const initialBikes = {
    trek: 'Top Fuel 8',
}
const addBikeImpl = function(state, bikeObj) {
    return { ...state, [bikeObj.id]: bikeObj.name};
}
const bikesReducer = createReducer({
    [addBike]: addBikeImpl,
}, initialBikes);


// Create full reducer
const reducers = combineReducers({
    usersState: usersReducer,
    bikesState: bikesReducer
});


// Create data store
export const store = createStore(reducers);
