import {Component} from "react";

class NavBar extends Component {
    render() {
        return (
            <div className="vertical-menu">
                <a href="#" className="active">Home</a>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
            </div>
        );
    }
}

export default NavBar;