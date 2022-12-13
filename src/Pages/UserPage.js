import {Component} from "react";
import axios from "axios";
import Async from "react-async";
import AddUser from "../Components/AddUser";
import "../css/UserCSS.css";
import UserDetails from "../Components/UserDetails";


class UserPage extends Component {

    state = {
        user: [],
        loading: true,
        selectedUser: null
    };

    loadUsers() {
        if (this.state.loading) {
            axios.get('http://localhost:8080/user/all')
                .then(res => {
                    //console.log(res);
                    console.log(res.data);
                    this.setState({user: res.data, loading: false});
                })
        }
    }

    loadUsers() {
        if (this.state.loading) {
            axios.get('http://localhost:8080/user/all')
                .then(res => {
                    //console.log(res);
                    console.log(res.data);
                    this.setState({user: res.data, loading: false});
                })
        }
    }

    render() {
        return (
            <div className={"UserBody"}>
                <div>
                    <g2>User Overview</g2>
                    <div>
                        <Async promiseFn={this.loadUsers()}>
                            {
                                ({data, err, isLoading}) => {
                                    if (this.state.loading) return "Loading..."
                                    if (err) return `Something Went Wrong: ${err.message}`

                                    if (this.state.user != null) {
                                        return (

                                            <div className={"userList"}>
                                                <ul>
                                                    {
                                                        this.state.user.map(user =>
                                                            <div className={"listItem"}>
                                                                <div className={"listItemLabel"}>
                                                                    <li><a
                                                                        onClick={this.state.selectedUser = user.id}>{user.username}</a>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        )}
                                                    <li className={"AddUser"}><a>+</a></li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                }
                            }

                        </Async>
                    </div>
                </div>
                <div>
                    <UserDetails selectedUser={this.state.selectedUser}/>
                </div>
            </div>
        );
    }
}

export default UserPage;