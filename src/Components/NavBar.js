import {Component} from "react";
import profile_icon from "../img_266351.png";

class NavBar extends Component {
    state = {
        isOpen: true,
    }

    render() {
        return (
            <nav className="sticky-lg-top">
                <div className="nav-center col-lg-8">


                    <ul className={this.state.isOpen ? "nav-links nav-header" : "nav-links"}>
                        <li>
                            <div className="col-lg-2 nav_home">
                                <a href="/">Home</a>

                            </div>
                        </li>
                        <li>
                            <div className="col-lg-3 nav_Translations">
                                <a href="/Users">Users</a>
                            </div>
                        </li>
                        <li>
                            <div className="col-lg-3 nav_VM">
                                <a href="/VM">VM List</a>
                            </div>
                        </li>
                        <li className="right">
                            <br/>
                            <div className="col-lg-3">
                                <a href="/users">
                                    <img src={profile_icon} className="profile_icon" alt="Profile Icon"/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;