import {Component} from "react";
import axios from "axios";

class UserDetails extends Component {
    renderComponent() {
        try {
            if (this.props.user.userID != null) {
                console.log("UserID = " + this.props.user.userID);
            }
        } catch (e) {
            console.log("Failed to Load User");
        }
    }

    render() {
        this.renderComponent()
        try{
        return (
            <div>
                <h2>User Details</h2>
                <p>Roletype: {this.props.user.roleType}</p>
                <p>Username: {this.props.user.username}</p>
                <p>Username: {this.props.user.token}</p>
                <p>Group: {this.props.user.userID}</p>
                <button onClick={() => this.DeleteUser(this.props.user.userID)}> Delete User</button>
            </div>
        );
        } catch (e) {return(<div>Failed to load User</div>)}
    }

    DeleteUser(userID) {
        axios.delete('http://localhost:8080/user/delete?id=' + userID + '&' + document.cookie)
            .then(res => {
                console.log(res);
                console.log(res.data);
                //console.log(document.cookie);
                window.location.href = '/';
            })
    }
}

export default UserDetails;