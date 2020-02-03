import React, {Component} from 'react';
import FrameCard from './FrameCard';
import Search from './Search';

const FRAMES = 'https://api.warframestat.us/warframes'

export default class Frames extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            frames: '',
        }
    }

    async componentDidMount() {
        let response = await fetch(FRAMES);
        let frames = await response.json()
        this.setState({
            frames: frames
          })
    }

    render() {
        return(
            <div>
                <div className='search-bar'>
                    <Search />
                </div>
                <div className='frame-card'>
                    <FrameCard frames={this.state.frames}/>
                </div>
            </div>
        )
    }
}