import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';

export default class FrameCard extends Component{

    render() {
        console.log(this.props.weapons)
        if(this.props.weapons) {
            return(
                this.props.weapons.map(w => 
                <Card
                    image = {w.wikiaThumbnail}
                    header = {w.name}
                    description = {w.description}
                />
                )
            )       
        } else {return <div>Loading...</div>}
    }
}