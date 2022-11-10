import {Component} from "react";
import axios from "axios";
import EditUser from "./EditUser";
import editUser from "./EditUser";

class ViewUsers extends Component {

    state = {
        Users: [
            {
                userid: 1,
                username: 'testUsername',
                password: 'testPassword',
                roletype: 'testRolltype',
                token: 'testToken'
            },
            {
                userid: 2,
                username: 'testUsername',
                password: 'testPassword',
                roletype: 'testRolltype',
                token: 'testToken'
            },
            {
                userid: 3,
                username: 'testUsername',
                password: 'testPassword',
                roletype: 'testRolltype',
                token: 'testToken'
            },
            {
                userid: 4,
                username: 'testUsername',
                password: 'testPassword',
                roletype: 'testRolltype',
                token: 'testToken'
            },
            {
                userid: 5,
                username: 'testUsername',
                password: 'testPassword',
                roletype: 'testRolltype',
                token: 'testToken'
            }],
        loading: true,
    }

    async getUsers() {
        const res = await axios.get('http://127.0.0.1:8000/get');
        const {data} = await res;
        console.log(res);
        this.setState({Users: data, loading: false});
        console.log("Users")
        console.log(this.state.Users);
    }

    editUser(e) {
        document.cookie = 'token=' + e;
        window.location.href = 'http://localhost:3000/user/edit';
    }

    render() {
        return (
            <div>
                {this.state.Users.map((user) => (
                        <div className={"Userlistitem"}>
                            <label><b>UserID:</b> {user.userid} | </label>
                            <label><b>Username:</b> {user.username} | </label>
                            <label><b>Password:</b> {user.password} | </label>
                            <label><b>Role: </b> {user.roletype} | </label>
                            <label><b>Token: </b>{user.token} | </label>
                            <button onClick={this.editUser(user.userid) } >Edit</button>
                            <button onClick={this.deleteUser(user.userid)}>Delete</button>
                        </div>

                    )
                )}
            </div>

        );
    }

    deleteUser(userid) {
        return undefined;
    }
}

export default ViewUsers;