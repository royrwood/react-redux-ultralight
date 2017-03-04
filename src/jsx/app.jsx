import React from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser } from './store.jsx';


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

class BikeList extends React.Component {
    render() {
        const bikeRows = [];
        for (let uid in this.props.bikes) {
            bikeRows.push(<li key={uid}>{this.props.bikes[uid]}</li>);
        }

        return(
            <ul>
                {bikeRows}
            </ul>
        );
    }
}

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.onAddClick = this.onAddClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onAddClick(event) {
        addUser({id:`newbie-${this.state.count}`, name:`New Guy #${this.state.count}`});
        this.setState({count: this.state.count+1});
    }

    onRemoveClick(event) {
        if (this.state.count > 0) {
            removeUser({id: `newbie-${this.state.count - 1}`, name: `New Guy #${this.state.count - 1}`});
            this.setState({count: this.state.count - 1});
        }
    }

    render() {
        return (
            <div>
                <h1>It's Alive!</h1>
                <br/>
                <p>Users:</p>
                <UserList users={this.props.users}/>
                <br/>
                <p>Bikes:</p>
                <BikeList bikes={this.props.bikes}/>
                <br/>
                <button type="button" onClick={this.onAddClick}>Add User</button>
                <button type="button" onClick={this.onRemoveClick}>Remove User</button>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        users: store.users,
        bikes: store.bikes
    };
};

export const App = connect(mapStateToProps)(AppComponent);
