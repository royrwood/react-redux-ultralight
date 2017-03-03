import React from 'react';
import { connect } from 'react-redux';
import { store, addUser } from './store.jsx';


class UserList extends React.Component {
    render() {
        const userRows = [];
        for (let uid in this.props.users) {
            userRows.push(<li key={uid}>{this.props.users[uid]}</li>);
        }

        return(
            <ul>
                {userRows}
            </ul>
        );
    }
}


class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>It's Alive!</h1>
                <br/>
                <UserList users={this.props.users}/>
                <button type="button" onClick={this.props.addUserFunc}>Add User</button>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        users: store.usersState
    };
}
const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        addUserFunc: function() {
            dispatch(addUser({ id:'newbie', name: 'New User'}));
        }
    }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
