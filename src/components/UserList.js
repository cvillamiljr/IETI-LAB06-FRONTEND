import React from 'react'

class UserList extends React.Component{

    render(){
        const {usersList} = this.props;
        const value = usersList.map((user)=>{

            return(<div key={user.username}>
                <h2>Username: {user.username}</h2>
                <h3>Password: {user.password}</h3>
                <h3>Email: {user.email}</h3>
                <br/>
            </div>)});
        return(
            <div>
                {value}
            </div>
        )
    }



};

export default UserList;