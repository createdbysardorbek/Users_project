import { Component } from "react";
import './Users.scss'
import User from "../User/User";

class Users extends Component {
    render() {
        if (this.props.users.length > 0) {
            return (
                <ul>
                    {this.props.users.map((user) => <User
                        onDelete={this.props.delete}
                        add={this.props.edit}
                        key={user.id}
                        name={user.name}
                        lastName={user.lastName}
                        bio={user.bio} age={user.age}
                        id={user.id}
                        isMarried={user.isMarried} />)}
                </ul>
            )
        } else {
            return (
                <ul>

                    <li className="user">
                        <h1>No users</h1>
                    </li>

                </ul>
            )
        }

    }
}

export default Users