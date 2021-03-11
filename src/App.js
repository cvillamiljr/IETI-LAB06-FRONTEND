import './App.css';
import React from "react";
import UserList from "./components/UserList";
import {Component} from "react/cjs/react.production.min";

class App extends Component {
    state = {
        usersList: []
    };


    componentDidMount() {
        fetch('https://taskplannercesar.azurewebsites.net/users')
            .then(response => response.json())
            .then(data => {
                let userList = [];
                data.forEach(function (user) {
                    userList.push(user)

                });

                this.setState({usersList: userList});

            });
    }

    render() {
        return (
            <div>

                <UserList usersList={this.state.usersList}/>
            </div>
        );
    }
}

export default App;
