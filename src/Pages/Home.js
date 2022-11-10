import {Component} from "react";
import axios from "axios";

class Home extends Component {
    getUser = async () => {

        const res = await axios.get(`http://127.0.0.1:8000/get`, {headers: {'Access-Control-Allow-Origin': '*'}});
        return res.data;

    };

    render() {
        //this.getUser()
        return (
            <div>home
            </div>
        );
    }
}

export default Home;