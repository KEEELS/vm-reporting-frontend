import {Component} from "react";
import axios from "axios";
import Async from "react-async";


class UserPage extends Component {

    state = {
        user: [],
        loading: true
    };

    loadUser() {
        if (this.state.loading) {
            axios.get('http://localhost:8080/user/all')
                .then(res => {
                    //console.log(res);
                    console.log(res.data);
                    this.setState({user: res.data, loading: false});
                })
        }
    }

    addUser = (e) => {
        const user = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
            roleType: e.target.elements.roleType.value
        }
        alert(document.cookie);
        axios.post('http://localhost:8080/user/add?username=' + user.username + '&password=' + user.password + '&roleType=' + user.roleType + '&' + document.cookie)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(document.cookie);
                window.location.href = '/user';
            })
        
        this.setState({loading: true});

    }


    render() {
        return (
            <div>
                <div>
                    <g2>User Overview</g2>
                    <div>
                        <Async promiseFn={this.loadUser()}>
                            {
                                ({data, err, isLoading}) => {
                                    if (this.state.loading) return "Loading..."
                                    if (err) return `Something Went Wrong: ${err.message}`

                                    if (this.state.user != null) {
                                        return (
                                            <div>
                                                {this.state.user.map(user => <li>{user.username}</li>)}
                                            </div>
                                        )
                                    }
                                }
                            }

                        </Async>
                    </div>
                </div>
                <div>
                    <h2>Add User</h2>

                    <div className="form">
                        <form className="login-form" onSubmit={this.addUser}>
                            <input type="username" name="username" placeholder="Username" required={true}/>
                            <input type="password" name="password" placeholder="Password" required={true}/>
                            <input type="text" name="roleType" placeholder="Role type" required={true}/>
                            <button type="Submit">Add User</button>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;