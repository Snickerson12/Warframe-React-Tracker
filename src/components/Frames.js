import React, {Component} from 'react';
import FrameCard from './FrameCard';
import FrameSearch from './FrameSearch';

const FRAMES = 'https://api.warframestat.us/warframes'

export default class Frames extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            frames: '',
            singleFrame: ''
        }
    }

    async componentDidMount() {
        let response = await fetch(FRAMES);
        let frames = await response.json()
        this.setState({
            frames: frames
          })
    }

    handleClear = async (frames) => {
        await this.setState({
            singleFrame: frames
        })
    }

    handleSearch = async (filter) => {
        await this.setState({
            singleFrame: filter.frame
        })
    }

    render() {
        return(
            <div>
                <div className='search-bar'>
                    <FrameSearch frames={this.state.frames} handleSearch={this.handleSearch} handleClear={this.handleClear}/>
                </div>
                <div className='frame-card'>
                    <FrameCard frames={this.state.frames} search={this.state.singleFrame}/>
                </div>
            </div>
        )
    }
}