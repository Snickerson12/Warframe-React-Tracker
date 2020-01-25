import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return(
            <Menu className='nav-menu'>
                <Menu.Item >
                    <Link to="/home"> Home </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/frames">Warframes</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/weapons">Weapons</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

