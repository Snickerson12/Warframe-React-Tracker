import React, {Component} from 'react';
import { Card, Checkbox } from 'semantic-ui-react';

export default class FrameCard extends Component{
   
    render() {
        console.log(this.props.frames)
        if(this.props.frames) {
            return(
                this.props.frames.map(f => 
                <Card
                    image = {f.wikiaThumbnail}
                    header = {f.name}
                    description = {f.description}
                />
                )
            )       
        } else {return <div>Loading...</div>}
    }
}