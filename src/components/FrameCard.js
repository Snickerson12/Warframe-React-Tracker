import React, {Component} from 'react';
import { Card, Checkbox } from 'semantic-ui-react';

export default class FrameCard extends Component{
   
    render() {
        console.log(this.props.frames)
        if(this.props.frames) {
            return(
                this.props.frames.map(f => 
                    <div className='card-container'>
                        <div>
                            <div><img src={f.wikiaThumbnail} className='frame-image'/></div>
                            <div className="header">{f.name}</div>
                            <div className="description"> {f.description} </div>
                        </div>
                    </div> 
                )
            )       
        } else {return <div>Loading...</div>}
    }
}