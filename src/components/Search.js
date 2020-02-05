import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            weapon: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = async (e) => {
        e.preventDefault()
        let searchInput = this.state.input
        const weaponsArray = this.props.weapons.slice()
        const filteredWeapons = weaponsArray.filter(weapon => {
            return (weapon.name.toLowerCase() === searchInput.toLowerCase())
        })
        await this.setState({
            weapon: filteredWeapons
        })
        this.props.handleSearch(this.state)
    }

    render() {
        return (
            <div className="search-form">
                <div className="search-items">
                    <form onSubmit={this.handleSubmit}>
                        <input className="search-params" type="text" name="input" onChange={this.handleChange} />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
        )
    }
}