import { Component } from "react";
import './App.scss'
import Header from "../Header/Header";
import Users from "../Users/Users";
import AddUser from "../AddUser/AddUser";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Sardor',
                    lastName: 'Ahadilloyev',
                    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, omnis.",
                    age: 18,
                    isMarried: false,
                },
                {
                    id: 2,
                    name: 'Sanjar',
                    lastName: 'Sattorov',
                    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, omnis.",
                    age: 43,
                    isMarried: true,
                }
            ]
        }

        this.addUser = this.addUser.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="List of users" />
                <main>
                    <Users users={this.state.users} />
                </main>
                <aside>
                    <AddUser add={this.addUser} />
                </aside>
            </div>
        )
    }


    addUser(user) {
        const id = this.state.users.length + 1;
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }

}

export default App