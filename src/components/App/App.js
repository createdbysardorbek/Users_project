import { Component } from "react";
import './App.scss'
import Header from "../Header/Header";
import Users from "../Users/Users";
import AddUser from "../AddUser/AddUser";
import axios from "axios";

const baseUrl = 'https://reqres.in/api/users?page=1';

class App extends Component {

    constructor(props) {
        super(props)

        axios.get(baseUrl).then(res=>{
            this.setState({users: res.data.data})
            console.log(res.data.data);
        })

        this.state = {
            users: []
        }

        console.log(this.state.users);

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
            this.setState({ users: [...allUsers] })
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1;
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }

}

export default App