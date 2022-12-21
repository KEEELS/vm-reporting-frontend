import {Component} from "react";
import axios from "axios";

class AddUser extends Component {


    addUser = (e) => {
        const user = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
            roleType: e.target.elements.roleType.value,
            token: document.cookie
        }

        axios.post('http://localhost:8080/user/add?username=' + user.username + '&password=' + user.password + '&roleType=' + user.roleType + '&' + document.cookie)
            .then(res => {
                console.log(res);
                console.log(res.data);
                //console.log(document.cookie);
                this.props.loading = true;
                console.log(this.props.loading);
                window.location.href = '/';
            })


    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="text" name="roleType" placeholder="Role type"/>
                    <input type={"submit"} value={"Add User"}/>
                </form>
            </div>
        );
    }
}

export default AddUser;