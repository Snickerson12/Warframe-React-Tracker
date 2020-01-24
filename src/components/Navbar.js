import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
    render() {
        return(
            <Menu className='nav-menu'>
                <Menu.Item>
                    Home
                </Menu.Item>

                <Menu.Item>
                    Warframes
                </Menu.Item>

                <Menu.Item>
                    Weapons
                </Menu.Item>
            </Menu>
        )
    }
}

