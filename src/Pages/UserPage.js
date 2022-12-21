import {Component} from "react";
import axios from "axios";
import Async from "react-async";
import AddUser from "../Components/AddUser";
import "../css/UserCSS.css";
import UserDetails from "../Components/UserDetails";

import {v4 as uuidv4} from "uuid";


class UserPage extends Component {

    state = {
        user: [],
        loading: true,
        selectedUser: null
    };

    renderComponent(user) {
        if(user != null) {
            this.state.selectedUser = user;
            this.forceUpdate();
        }
    }
    loadUsers() {
        if (this.state.loading) {
            axios.get('http://localhost:8080/user/all')
                .then(res => {
                    this.setState({user: res.data, loading: false});
                })
        }
    }


    render() {
        return (
            <div className={"UserBody"}>
                <div>
                    <h2>User Overview</h2>
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
                                                            <div key={uuidv4()} className={"listItem"}>
                                                                <div className={"listItemLabel"}>
                                                                    <li><a onClick={() => this.renderComponent(user)}>{user.username}</a>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        )}
                                                    <li className={"AddUser"}><a onClick={() => this.renderComponent("AddNewUser")}>+</a></li>
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
                    {(this.state.selectedUser == null) ? <div>No User Selected</div> : <div></div>}
                    {(this.state.selectedUser != null && this.state.selectedUser != "AddNewUser") ? <UserDetails user={this.state.selectedUser}/> : <div></div>}
                    {(this.state.selectedUser != null && this.state.selectedUser == "AddNewUser") ? <AddUser/> : <div></div>}
                </div>
            </div>
        );
    }
}

export default UserPage;