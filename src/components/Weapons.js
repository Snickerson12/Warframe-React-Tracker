import React, {Component} from 'react';
import WeaponCard from './WeaponCard';
import Search from './Search';

const WEAPONS = 'https://api.warframestat.us/weapons'

export default class Weapons extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            weapons: '',
            singleWeapon: ''
        }
    }

    async componentDidMount() {
        let response = await fetch(WEAPONS);
        let weapons = await response.json();
        this.setState({
            weapons: weapons
        })
    }

    handleSearch = async (filter) => {
        await this.setState({
            singleWeapon: filter.weapon
        })
    }

    handleClear = async (weapons) => {
        await this.setState({
            singleWeapon: weapons
        })
    }
 
    render() {
        return (
            <div>
                <div className='search-bar'>
                    <Search weapons={this.state.weapons} handleSearch={this.handleSearch} handleClear={this.handleClear}/>
                </div>
                <div className='weapon-card'>
                    <WeaponCard weapons={this.state.weapons} search={this.state.singleWeapon}/>
                </div>
            </div>
        )
    }
}