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
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
        }

        //alert(user.username);
        //send this.state.user to the backend
        axios.get('http://localhost:8080/user/login?username='+user.username+'&password='+user.password)
            .then(res => {
                console.log(res);
                console.log(res.data);
                document.cookie = 'token=' + res.data;
                alert(document.cookie);
                window.location.href = '/user';
            }   )
    };


    render() {
        return (
            <div>

                <div className="login-page">
                    <div className="form">
                        <img className={"gpx_cloud_Logo"} src={logo} alt={"img_logo"}/>
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