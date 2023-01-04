import { Component } from "react";
import './User.scss'
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends Component {

    render() {
        return (
            <li className="user" key={this.props.id}>
                <IoCloseCircleSharp className="delete-icon" />
                <IoHammerSharp className="edit-icon" />
                <h1>{this.props.name} {this.props.lastName}</h1>
                <h2>{this.props.bio}</h2>
                <h3>{this.props.age}</h3>
                <h4>{this.props.isMarried ? "Married :)" : "Unmarried :("}</h4>
            </li>
        )
    }
}

export default User