import React, {Component} from 'react';

export default class Navbar extends Component {

    render() {
        return(
            <div className='navbar'>
                <div className='dropdown'>
                    <button className='dropbtn'>
                        <i className="fas fa-bars"/>
                    </button>
                    <div className='dropdown-content'>
                        <a href='/'>Home</a>
                        <a href='/frames'>Warframes</a>
                        <a href='/weapons'>Weapons</a>
                    </div>
                </div>
            </div>
        )
    }
}

