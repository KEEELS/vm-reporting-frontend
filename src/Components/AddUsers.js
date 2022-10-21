import {Component} from "react";
import axios from "axios";

class AddUsers extends Component {
    state = {
        user: null,
        loading: true
    };

    addUser = (e) => {
        e.preventDefault();
        const user = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,

        }

        alert(user.username);
        axios.post('http://127.0.0.1:8000/', {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => {
                console.log('Success!!!');
                console.log(response.data);
                alert(response.data);
                this.setState({user: response.data, loading: false});
                console.log(this.state.user);
                document.cookie = 'token=' + this.state.user.token;
                window.location.href = 'http://localhost:3000/';

            }).catch((e) => {
            console.log(e);
        })
    };

    render() {
        return (
            <div>

                <div className="Add-User-Component">
                    <div className="form">
                        {/*<img src={logo}/>*/}
                        <form className="AddUser" onSubmit={this.addUser}>
                            <label>Username</label>
                            <input type="username" name="username" placeholder="Username" required={true}/>

                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" required={true}/>

                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email" required={true}/>

                            <label>Company</label>
                            <input type="text" name="company" placeholder="Company" required={true}/>

                            <button type="Submit">Add User</button>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUsers;