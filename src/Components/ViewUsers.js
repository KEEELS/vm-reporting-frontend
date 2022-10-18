import {Component} from "react";
import * as elements from "react-bootstrap/ElementChildren";
import axios from "axios";

class ViewUsers extends Component {
    state = {
        Users: [],
        loading: true,
    }

    async getUsers(){
        const res = await axios.get('http://127.0.0.1:8000/get');
        const {data} = await res;
        console.log(res);
        this.setState({Users:data, loading:false});
        console.log("Users")
        console.log(this.state.Users);
    }

    render() {
        return (
            this.getUsers()
                //
                //     Users.map( usrs => {
                //         <div className={"col-lg-5 userEntity"}>
                //     <li className="list-group-item">User 1</li>
                // </div>})

        );
    }
}

export default ViewUsers;