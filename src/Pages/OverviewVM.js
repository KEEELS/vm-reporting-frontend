import {Component} from "react";
import VMListItem from "../Components/VMListItem";

class OverviewVM extends Component {
    state = {
        vmList: [{
            vm: {
                name: "",
                identityName: "",
                powerState: "",

                cpuCount: 0,
                guestOS: "",
                sizeMiB: 0,
            }
        }]
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.state.vmList.map((vm) => ( <VMListItem props={vm}/> ))}
            </div>
        );
    }
}