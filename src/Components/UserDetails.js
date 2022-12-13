import {Component} from "react";

class UserDetails extends Component{
    render() {
        return (
            <div>
                <h2>User Details</h2>
                <p>Username: {this.props.selectedUser}</p>
            </div>
        );
    }

}
export default UserDetails;