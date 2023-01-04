import { Component } from "react";
import './AddUser.scss'
 
class AddUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            lastName: '',
            age: 1,
            bio: '',
            isMarried: false
        }
    }

    render() {
        return (
            <form>
                <input placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder="Surname" onChange={(e) => this.setState({ lastName: e.target.value })} />
                <textarea placeholder="Bio" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Age" onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isMarried" >Are you married?</label>
                <input type="checkbox" id="isMarried" onChange={(e) => this.setState({ isMarried: e.target.checked })} />
                <button type="button" onClick={()=>{
                    this.props.add({
                        name: this.state.name,
                        lastName: this.state.lastName,
                        bio: this.state.bio,
                        age: this.state.age,
                        isMarried: this.state.isMarried,
                    })
                }}>Add user</button>
            </form>
        )
    }
}

export default AddUser