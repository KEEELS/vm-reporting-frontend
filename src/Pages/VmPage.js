import {Component} from "react";
import axios from "axios";

class VmPage extends Component {
    state = {
        devices: [{
            name: "test",
            identityName: "",
            powerState:"",
            guestOs:""
        }],
        loading: true
    };

    componentDidMount() {
        axios.get('http://localhost:8080/vm/all')
            .then(res => {
                //console.log(res);
                console.log(res.data);
                this.setState({devices: res.data, loading: false});
            })
    }

    render() {
        return (
            <div>
                {/*map state.devices*/}


                <h2>Virtual Machines</h2>
                <ul>
                    {this.state.devices.map(device => <li>{device.name}</li>)}
                </ul>
            </div>
        );
    }
}