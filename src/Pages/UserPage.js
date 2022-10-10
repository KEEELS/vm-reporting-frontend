import {Component} from "react";
import ViewUsers from "../Components/ViewUsers";

class UserPage extends Component {
    render() {
        return (
            <div className={"col-lg-3"}>UserPage
                <div>
                    <a href="/Users/adduser">Add user</a>
                <div>
                    <ViewUsers/>
                </div>
                </div>
            </div>
        );
    }
}

export default UserPage;