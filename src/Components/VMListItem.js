import {Component} from "react";

class VMListItem extends Component {
    render() {
        return (
            <li className="vm-list-item">
                <span className="vm-list-item__name">Name: {this.props.name} | </span>
                <span className="vm-list-item__identityName">IdentityName: {this.props.identityName} | </span>
                <span className="vm-list-item__powerState">Power State: {this.props.powerState} | </span>
                <span className="vm-list-item__cpuCount">CPU Count: {this.props.cpuCount} | </span>
                <span className="vm-list-item__guestOS">Guest OS: {this.props.guestOS} | </span>
                <span className="vm-list-item__sizeMiB">Size MiB: {this.props.sizeMiB} |</span>
            </li>
        );
    }
}
export default VMListItem;