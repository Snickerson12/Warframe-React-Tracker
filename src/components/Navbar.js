import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const WEAPONS = 'https://api.warframestat.us/weapons'
const FRAMES = 'https://api.warframestat.us/warframes'


export default class Navbar extends Component {

    FrameRedirect = async (e) => {
        e.preventDefault()
        console.log('clicked')
        let response = await fetch(FRAMES);
        let data = await response.json()
        //send data
    }
   
    WeaponsRedirect = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    render() {
        return(
            <Menu className='nav-menu'>
                {/* <Menu.Item >
                    <Link to="/home"> Home </Link>
                </Menu.Item> */}

                <Menu.Item onClick = {this.FrameRedirect}>
                    Warframes
                </Menu.Item>

                <Menu.Item onClick = {this.WeaponsRedirect}>
                    Weapons
                </Menu.Item>
            </Menu>
        )
    }
}

