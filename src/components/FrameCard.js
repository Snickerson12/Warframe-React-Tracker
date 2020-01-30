import React, {Component} from 'react';
import { Card, Checkbox } from 'semantic-ui-react';

export default class FrameCard extends Component{
    constructor() {
        super()
        this.state = {
            owned: false,
            bgColor: 'white',
        }
    }

    handleClick = (f) => {
        if(this.state.owned === false) {
            this.setState({
                owned: true,
                bgColor: 'teal'
            })
        }else{
            this.setState({
                owned: false,
                bgColor: 'white'
            })
        }
    }

    renderCard = (f, index) => {
        return(
            <div className='frame-card-container' onClick={() => this.handleClick(f)} style = {{backgroundColor: this.state.bgColor}}>
                <div>
                    <div><img src={f.wikiaThumbnail} className='frame-image'/></div>
                    <div className="header">{f.name}</div>
                    <div className="description"> {f.description} </div>
                    <form className='checkbox'>
                        <label> Mastered? </label>
                        <input type='checkbox'/>
                    </form>
                </div>
            </div>
        )
    }
   
    render() {
        return(
            <div className='frame-card'>
                {this.props.frames
                ?
                    this.props.frames.map((f, index) => this.renderCard(f, index))
                :
                    <div>Loading</div>
                }
            </div>  
        )       
    }
}