import {Component} from "react";
import ViewUsers from "../Components/ViewUsers";

class UserPage extends Component {
    render() {
        return (
            <div className={"col-lg-3"}>UserPage
                <div>
                    <button href="/Users/adduser">Add user</button>
                <div>
                    <ViewUsers/>
                </div>
                </div>
            </div>
        );
    }
}

export default UserPage;