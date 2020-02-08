import React, { Component } from 'react';

export default class FrameSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            frame: []
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
        const framesArray = this.props.frames.slice()
        const filteredFrames = framesArray.filter(frame => {
            return (frame.name.toLowerCase() === searchInput.toLowerCase())
        })
        await this.setState({
            frame: filteredFrames
        })
        this.props.handleSearch(this.state)
    }

    handleClear = async (e) => {
        e.preventDefault()
        await this.setState({
            input: ''
        })
        this.props.handleClear(this.props.frames)
    }

    render() {
        return (
            <div className="search-form">
                <div className="search-items">
                    <form onSubmit={this.handleSubmit}>
                        <input className="search-params" type="text" name="input" onChange={this.handleChange} />
                        <input type="submit" value="Search" />
                        <button onClick={this.handleClear}>Clear</button>
                    </form>
                </div>
            </div>
        )
    }
}