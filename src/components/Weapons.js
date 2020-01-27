import React, {Component} from 'react';
import WeaponCard from './WeaponCard';

const WEAPONS = 'https://api.warframestat.us/weapons'

export default class Weapons extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            weapons: ''
        }
    }

    async componentDidMount() {
        let response = await fetch(WEAPONS);
        let weapons = await response.json();
        this.setState({
            weapons: weapons
        }) //this.state.weapons
    }

    render() {
        return (
            <div className='weapon-card'>
                <WeaponCard weapons={this.state.weapons}/>
            </div>
        )
    }
}