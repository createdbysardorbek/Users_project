import { Component } from "react";
import './User.scss'
import AddUser from "../AddUser/AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editForm: false,
        }
    }

    render() {
        return (
            <li className="user" key={this.props.id}>
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.props.id)} className="delete-icon" />
                <IoHammerSharp onClick={() => { this.setState({ editForm: !this.state.editForm })}} className="edit-icon" />
                <h1>{this.props.name} {this.props.lastName}</h1>
                <img src={this.props.avatar}/>
                <h2>{this.props.bio}</h2>
                <h3>{this.props.age}</h3>
                <h4>{this.props.isMarried ? "Married :)" : "Unmarried :("}</h4>
                {this.state.editForm && <AddUser user={this.props.id} add={this.props.add}/>}
            </li>
        )
    }
}

export default User