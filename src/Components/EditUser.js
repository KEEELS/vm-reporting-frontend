import {Component} from "react";
import axios from "axios";

class EditUser extends Component {

    componentDidMount() {
        this.getUser();

    }

    state = {
        userID: null,
        user: null,
        loading: true
    };

    getUser = async () => {
        this.state.userID = document.cookie.split('=')[1];

        const res = await axios.get('http://127.0.0.1:8000/get/' + this.state.userID);
        const {data} = await res;
        console.log(res);
        this.setState({user: data, loading: false});
        console.log("User")
        console.log(this.state.user);
    }

    editUser = (e) => {
        e.preventDefault();
        const user = {
            userID: this.state.userID,
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
            email: e.target.elements.email.value,
            company: e.target.elements.company.value,
        }

        axios.put('http://localhost:8080/PostUser/', {user}
        ).then(response => {
            console.log(response.data);
            alert(response.data);
            window.location.href = '/';

        }).catch((e) => {
            console.log(e);
        })
    };

    render() {
        return (
            <div>

                <div className="Edit-User-Component">
                    <div className="form">
                        {/*<img src={logo}/>*/}
                        <form className="EditUser" onSubmit={this.editUser}>
                            <label>Username</label>
                            <input type="username" name="username" placeholder="Username" required={true} value={this.state.user.username}/>

                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" required={true} value={this.state.user.password}/>

                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email" required={true} value={this.state.user.email}/>

                            <label>Company</label>
                            <input type="text" name="company" placeholder="Company" required={true} value={this.state.user.company}/>

                            <button type="Submit">Update User</button>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;