import React from 'react';
import { connect } from 'react-redux';
import { addUser } from './store.jsx';


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
    constructor(props) {
        super(props);

        this.state = { count: 0 };

        this.onAddClick = this.onAddClick.bind(this);
    }

    onAddClick(event) {
        addUser({id:`newbie-${this.state.count}`, name:`New Guy #${this.state.count}`});
        this.setState({count: this.state.count+1});
    }

    render() {
        return (
            <div>
                <h1>It's Alive!</h1>
                <br/>
                <UserList users={this.props.users}/>
                <button type="button" onClick={this.onAddClick}>Add User</button>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        users: store.usersState
    };
};

export const App = connect(mapStateToProps)(AppComponent);
