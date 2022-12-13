import {Component} from "react";

import logo from "../GxP-Cloud-logo-Feb22.png";
import "../css/NavBarCSS.css";

class NavBar extends Component{
    render() {
        return (
            <div>
                <div className={"navBar"}>
                    <div className={"navBarLogo"}>
                        <img className={"gpx_cloud_Logo"} src={logo} alt={"img_logo"}/>
                    </div>
                    <div className={"navBarButtons"}>
                        <ul>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/users"}>Users</a></li>
                            <li><a href={"/devices"}>Devices</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default NavBar;