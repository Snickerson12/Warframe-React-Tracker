import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const FRAMES = 'https://api.warframestat.us/warframes'
const WEAPONS = 'https://api.warframestat.us/weapons'


export default class Navbar extends Component {

    FrameRedirect = async (e) => {
        e.preventDefault()
        let response = await fetch(FRAMES);
        let data = await response.json()
        //send data
    }
   
    WeaponsRedirect = async (e) => {
        e.preventDefault()
        let response = await fetch(WEAPONS);
        let data = await response.json();
        //send data
    }

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

