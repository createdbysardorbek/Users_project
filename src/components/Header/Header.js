import { Component } from "react";
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    {this.props.title}
                </nav>
            </header>
        )
    }
}

export default Header