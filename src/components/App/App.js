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
                    name: 'Cristiano',
                    lastName: 'Ronaldo',
                    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, omnis.",
                    age: 18,
                    isMarried: false,
                },
                {
                    id: 2,
                    name: 'Lionel',
                    lastName: 'Messi',
                    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, omnis.",
                    age: 43,
                    isMarried: true,
                }
            ]
        }

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="List of users" />
                <main>
                    <Users users={this.state.users} edit={this.editUser} delete={this.deleteUser} />
                </main>
                <aside>
                    <AddUser add={this.addUser} />
                </aside>
            </div>
        )
    }

    deleteUser(id) {
        this.setState({ users: this.state.users.filter(el => el.id !== id) })
    }

    editUser(user) {
        let allUsers = this.state.users;
        allUsers[user.id - 1] = user;

        this.setState({ users: [] }, () => {
            this.setState({users: [...allUsers]})
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1;
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }

}

export default App