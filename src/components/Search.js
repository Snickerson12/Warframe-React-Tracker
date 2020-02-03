import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="search-form">
                <div className="search-items">
                    <form onSubmit={this.handleSubmit}>
                        <input className="search-params" type="text" name="location" onChange={this.handleChange} />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div>
        )
    }
}