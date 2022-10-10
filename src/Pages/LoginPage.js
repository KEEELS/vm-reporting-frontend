import {Component} from "react";
import axios from "axios";
import logo from "../GxP-Cloud-logo-Feb22.png";

class LoginPage extends Component {
    state = {
        user: null,
        loading: true
    };

    loginUser = (e) => {
        e.preventDefault();
        const user = {
            username:e.target.elements.username.value,
            password:e.target.elements.password.value,
        }

        alert(user.username);
        axios.get('http://127.0.0.1:8000/get')
            .then(response => {
                console.log('Success!!!');
                console.log(response.data);
                alert('succest');
                alert(response.data.name);
                //this.setState({user: response.data, loading: false});
                //console.log(this.state.user);
                //document.cookie = 'token=' + this.state.user.token;
                window.location.href = 'http://localhost:3000/';

            }).catch((e) => {

            console.log(e);
        })
    };

    render() {
        return (
            <div>

                <div className="login-page">
                    <div className="form">
                        <img className={"gpx_cloud_Logo"} src={logo}/>
                        <form className="login-form" onSubmit={this.loginUser}>
                            <input type="username" name="username" placeholder="Username" required={true}/>
                            <input type="password" name="password" placeholder="password" required={true}/>
                            <button type="Submit">Login</button>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;